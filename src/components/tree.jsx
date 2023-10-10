import { useState } from 'react';
import Node from './Node'; // Import the Node component

const Tree = () => {
  const [nodes, setNodes] = useState([
    // Initial nodes (you can customize this)
    { id: 1, text: 'Category 1', isParent: true, children: [] },
    { id: 2, text: 'Category 2', isParent: true, children: [] },
  ]);

  const addNode = (parentId) => {
    const newNode = {
      id: Date.now(), // Unique identifier (you may use a library for this)
      text: 'New Category',
      isParent: false,
      children: [],
    };

    // Find the parent node and add the new node as its child
    const updatedNodes = nodes.map((node) => {
      if (node.id === parentId) {
        return { ...node, children: [...node.children, newNode] };
      }
      return node;
    });

    setNodes(updatedNodes);
  };

  const deleteNode = (nodeId) => {
    // Remove the node with the given ID from the tree
    const updatedNodes = nodes.filter((node) => node.id !== nodeId);
    setNodes(updatedNodes);
  };

  const editNode = (nodeId, newText) => {
    // Update the text of the node with the given ID
    const updatedNodes = nodes.map((node) => {
      if (node.id === nodeId) {
        return { ...node, text: newText };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

  return (
    <div className="tree">
      {nodes.map((node) => (
        <Node
          key={node.id}
          text={node.text}
          isParent={node.isParent}
          onDelete={() => deleteNode(node.id)}
          onEdit={(newText) => editNode(node.id, newText)}
          onAddChild={() => addNode(node.id)}
        />
      ))}
    </div>
  );
};

export default Tree;
