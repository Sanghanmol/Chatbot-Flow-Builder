import React from 'react'

/**
 * NodePanel: shows types of nodes available for dragging into canvas.
 * For extensibility, it can accept a list of node types in future.
 */

export default function NodePanel() {
  const onDragStart = (event, nodeType) => {
    // set the drag data which FlowBuilder will read on drop
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <div className="node-panel">
      <div style={{ fontWeight: 700 }}>Nodes</div>

      <div
        className="palette-item"
        onDragStart={(e) => onDragStart(e, 'textNode')}
        draggable
        title="Drag to canvas"
      >
        Message
      </div>

      <div style={{ marginTop: 12, color: '#666' }}>
        Drag a node into the canvas. You can add multiple Message nodes.
      </div>
    </div>
  )
}
