# Chatbot Flow Builder

A simple and extensible **Chatbot Flow Builder** built with **React** and **React Flow**.  
It allows you to create flows by connecting multiple message nodes, edit node text, and save the flow.

---

## Features

1. **Text Node**
   - Represents a message in the chatbot flow.
   - Multiple Text Nodes can exist in one flow.
   - Drag from **Nodes Panel** to add to canvas.

2. **Nodes Panel**
   - Contains all types of nodes supported by the builder.
   - Currently supports **Message Node**.
   - Extensible for future node types.

3. **Edge**
   - Connects two nodes together.
   - Each **source handle** can only have one outgoing edge.
   - Each **target handle** can accept multiple incoming edges.

4. **Source & Target Handles**
   - Source handle on the right.
   - Target handle on the left.
   - Drag from source handle to connect nodes.

5. **Settings Panel**
   - Appears when a node is selected.
   - Allows editing the text of a selected Text Node.

6. **Save Button**
   - Saves the flow.
   - Validates that nodes do not have empty target handles (if multiple nodes exist).
   - Shows errors for invalid flows.

7. **Responsive UI**
   - Clean, modern design using solid green and cyan colors: `#10B981` & `#06B6D4`.

---

