import React from "react";
import "../main.css";
const TreeNode = ({ value, left, right }) => {
  return (
    <div className="node">
      <div className="node__value">{value}</div>
      {(left || right) && <div className="node__bottom-line"></div>}
      {(left || right) && (
        <div className="node__children">
          {left && <TreeNode {...left} />}
          {right && <TreeNode {...right} />}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
