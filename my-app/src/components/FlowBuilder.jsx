import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';
import NodePanel from './NodePanel';
import SettingsPanel from './SettingsPanel';
import TextNode from './nodes/TextNode';
import { validateSave } from '../utils/validation';

export default function FlowBuilder() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [error, setError] = useState('');
  const reactFlowWrapper = useRef(null);
  const rfInstance = useRef(null);

  // Memoize nodeTypes
  const nodeTypes = useMemo(() => ({ textNode: TextNode }), []);

  /** Initial sample node */
  useEffect(() => {
    setNodes([
      {
        id: 'n1',
        type: 'textNode',
        position: { x: 50, y: 80 },
        data: { label: 'Send Message', text: 'Sample message' },
      },
    ]);
  }, []);

  /** React Flow change handlers */
  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  /** Connect nodes freely */
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  /** Save React Flow instance */
  const onInit = useCallback((rfi) => {
    rfInstance.current = rfi;
  }, []);

  /** Handle dropping a new node */
  const onDrop = useCallback((event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

    const type = event.dataTransfer.getData('application/reactflow');
    if (!type) return;

    const position = rfInstance.current.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const id = uuidv4();
    const newNode = {
      id,
      type,
      position,
      data: { label: 'Send Message', text: '' },
    };

    setNodes((nds) => nds.concat(newNode));

    // Connect from source node if dragging from a handle
    const sourceId = event.dataTransfer.getData('sourceNodeId');
    if (sourceId) {
      setEdges((eds) =>
        addEdge({ source: sourceId, sourceHandle: 'b', target: id, targetHandle: 'a', animated: true }, eds)
      );
    }
  }, []);

  /** Allow drop */
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  /** Selection change */
  const onSelectionChange = useCallback(({ nodes: selectedNodes }) => {
    if (selectedNodes && selectedNodes.length === 1) {
      setSelectedNode(selectedNodes[0]);
    } else {
      setSelectedNode(null);
    }
  }, []);

  /** Update node text */
  const updateNodeText = useCallback((id, newText) => {
    setNodes((nds) =>
      nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, text: newText } } : n))
    );
  }, []);

  /** Save flow with validation */
  const onSave = useCallback(() => {
    setError('');

    if (nodes.length > 1) {
      // Find nodes that don't have any outgoing edges
      const nodesWithoutOutgoing = nodes.filter(
        (n) => !edges.some((e) => e.source === n.id)
      );

      if (nodesWithoutOutgoing.length > 1) {
        setError('Multiple nodes have empty outgoing connections.');
        return;
      }
    }

    // You can still call your validateSave for other validations
    const res = validateSave(nodes, edges);
    if (!res.valid) {
      setError(res.message);
      return;
    }

    alert('Flow saved successfully! Check console for nodes & edges.');
    console.log('Nodes:', nodes);
    console.log('Edges:', edges);
  }, [nodes, edges]);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Left: Canvas */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            padding: 12,
            display: 'flex',
            justifyContent: 'flex-end',
            background: '#fff',
          }}
        >
          <button onClick={onSave} className="save-btn">
            Save Changes
          </button>
        </div>

        {error && <div className="error-banner">{error}</div>}

        <div ref={reactFlowWrapper} style={{ height: 'calc(100% - 64px)' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onSelectionChange={onSelectionChange}
            fitView={true}
            nodeTypes={nodeTypes}
            className="reactflow-wrapper"
          >
            <Controls />
            <Background gap={16} />
          </ReactFlow>
        </div>
      </div>

      {/* Right: Node Panel / Settings */}
      <div className="panel">
        {selectedNode ? (
          <SettingsPanel node={selectedNode} updateNodeText={updateNodeText} />
        ) : (
          <NodePanel />
        )}
      </div>
    </div>
  );
}
