import React, { useEffect, useState } from 'react'

/**
 * SettingsPanel: shows when a node is selected.
 * Contains a textarea to edit the node's text and Apply button.
 */

export default function SettingsPanel({ node, updateNodeText }) {
  const [text, setText] = useState(node.data.text || '');

  useEffect(() => {
    setText(node.data.text || '');
  }, [node]);

  const handleChange = (e) => setText(e.target.value);
  const handleSave = () => updateNodeText(node.id, text);

  return (
    <div style={{
      padding: 16,
      background: '#f3f4f6',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
      <div style={{ fontWeight: 700 }}>Settings</div>
      <label style={{ fontSize: 14 }}>Node Text:</label>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        style={{
          padding: 8,
          borderRadius: 6,
          border: '1px solid #d1d5db',
          width: '100%'
        }}
      />
      <button
        onClick={handleSave}
        style={{
          padding: 8,
          borderRadius: 6,
          background: '#3b82f6',
          color: '#fff',
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer'
        }}
      >
        Save Text
      </button>
    </div>
  );
}