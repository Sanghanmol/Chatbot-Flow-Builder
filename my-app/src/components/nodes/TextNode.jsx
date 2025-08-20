import React from 'react';
import { Handle, Position } from 'reactflow';

/**
 * Custom Text Node UI.
 * - Shows a label and text
 * - Has a source handle (bottom) and a target handle (top)
 *
 * Note: reactflow will render handles and manage interactions.
 */
export default function TextNode({ data }) {
  return (
    <div
      style={{
        padding: 8,
        background: 'white',
        borderRadius: 8,
        boxShadow: '0 6px 18px rgba(15,23,42,0.08)',
        minWidth: 180,
        border: '1px solid #e6edf3',
      }}
    >
      {/* target handle - can accept multiple incoming edges */}
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        style={{ background: '#9CA3AF' }}
      />

      <div
        style={{
          background: '#E6FFFA',
          padding: '6px 10px',
          borderRadius: 6,
          fontWeight: 700,
        }}
      >
        {data.label || 'Send Message'}
      </div>

      <div style={{ marginTop: 8, minHeight: 24 }}>
        {data.text || <span style={{ color: '#9CA3AF' }}>No text</span>}
      </div>

      {/* source handle - only one outgoing edge allowed by FlowBuilder logic */}
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ background: '#10B981' }}
        onMouseDown={(event) => {
          event.stopPropagation();
          event.dataTransfer?.setData('sourceNodeId', data.id);
          event.dataTransfer?.setData('application/reactflow', 'textNode');
        }}
      />
    </div>
  );
}

