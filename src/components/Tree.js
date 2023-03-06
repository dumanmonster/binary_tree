import React, { useState, useEffect } from "react";
import TreeNode from "./TreeNode";
import "../main.css";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 201) - 100;
};

const insertNode = (node, value) => {
  if (value < node.value) {
    if (node.left) {
      insertNode(node.left, value);
    } else {
      node.left = { value, left: null, right: null };
    }
  } else {
    if (node.right) {
      insertNode(node.right, value);
    } else {
      node.right = { value, left: null, right: null };
    }
  }
};

const Tree = () => {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        const value = generateRandomNumber();
        if (!root) {
          setRoot({ value, left: null, right: null});
        } else {
          insertNode(root, value);
          setRoot({ ...root });
          console.log(root)
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [root]);

  return <div className="tree">{root && <TreeNode {...root} />}</div>;
};

export default Tree;
