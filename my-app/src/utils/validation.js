/**
 * Simple validation utility for the flow save button.
 * The assignment requires: "Show an error if there are more than one Nodes
 * and more than one Node has empty target handles".
 *
 * Here we interpret "empty target handles" as: node has no outgoing connection.
 */

export function validateSave(nodes = [], edges = []) {
  // If 0 or 1 nodes, allow save.
  if (!nodes || nodes.length <= 1) {
    return { valid: true }
  }

  // Count how many nodes have no outgoing edges
  const nodesWithNoOutgoing = nodes.filter(n => !edges.some(e => e.source === n.id))

  if (nodesWithNoOutgoing.length > 1) {
    return {
      valid: false,
      message: 'Cannot save Flow: more than one node has empty outgoing connection.'
    }
  }

  return { valid: true }
}
