# 🤖 BiteSpeed Chatbot Flow Builder

An interactive chatbot flow builder with a **drag-and-drop UI**, node connection logic, and a modern panel-based interface.  
Built with **React + React Flow + MUI**.

---

## 📌 Overview
BiteSpeed Flow Builder allows users to:

✅ Create **Text Nodes** representing messages  
✅ Drag and drop nodes from the **Nodes Panel**  
✅ Connect nodes using **edges** to define conversation flow  
✅ Edit node text via **Settings Panel**  
✅ Save flows with **validation for incomplete connections**

---

## 🚀 Features

- 📍 **Text Node**  
  - Represents a chatbot message  
  - Multiple nodes can exist in a single flow  
  - Added to canvas via drag-and-drop

- 🖇 **Edges**  
  - Connect nodes to define flow order  
  - Source handle: **only one outgoing edge allowed**  
  - Target handle: **can have multiple incoming edges**

- 🛠 **Settings Panel**  
  - Appears when a node is selected  
  - Edit node text dynamically

- 💾 **Save Button**  
  - Validates flow  
  - Shows error if multiple nodes have empty target handles  
  - Logs nodes & edges to console on successful save

- 🎨 **UI**  
  - Color-coded nodes & handles  
  - Panels for node selection and settings  
  - Responsive and modern layout

---

## 🖥️ Tech Stack

- ⚛️ React + Vite  
- 🎨 Material-UI (MUI)  
- 🔗 React Flow  
- 💾 Local state management (useState, useRef)  
- 📝 UUID for unique node IDs  

---

## 📸 UI Preview

- **Left panel:** Nodes Panel for dragging new nodes  
- **Canvas:** Main flow area to place & connect nodes  
- **Right panel:** Settings Panel for editing selected node  
- **Edges:** Connect nodes to define chatbot conversation

---

## 🛠️ Installation & Run

# Clone the repo
- git clone https://github.com/Sanghanmol/Chatbot-Flow-Builder.git
- cd BiteSpeed-Chatbot-Flow

# Install dependencies
npm install

# Run the app
npm run dev

---

## 🚀 Usage

1️⃣ Drag a **Message node** from Nodes Panel to canvas  
2️⃣ Drag from a node’s **source handle** to another node’s **target handle** to connect them  
3️⃣ Select a node to edit text via **Settings Panel**  
4️⃣ Click **Save** → Validates flow and logs nodes & edges  
5️⃣ Add multiple nodes and connect freely to build chatbot flow

---

## 🎨 UI Highlights

✅ Drag-and-drop **Nodes Panel**  
✅ **Color-coded nodes** for easy identification  
✅ **Edges** clearly show connections  
✅ Responsive **canvas & panels**  
✅ **Settings Panel** for live node editing

---

### 📜 License

MIT License © 2025 - Created with ❤️ by Anmol Sangha

---
