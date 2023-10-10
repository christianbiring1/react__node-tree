import { useState } from 'react';

const Node = ({ text = 'My text', isParent, onDelete, onEdit, onAddChild }) => {
  const [isEditing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(inputText);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleAddChildClick = () => {
    onAddChild();
  };

  return (
    <div className={`node ${isParent ? 'parent' : 'child'}`}>
      {!isEditing ? (
        <div>
          {text}
          <span className="icon" onClick={handleEditClick}>
            ✏️
          </span>
          <span className="icon" onClick={handleDeleteClick}>
            ❌
          </span>
          <span className="icon" onClick={handleAddChildClick}>
            ➕
          </span>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Category name"
          />
          <span className="icon" onClick={handleSaveClick}>
            ✔️
          </span>
          <span className="icon" onClick={() => setEditing(false)}>
            ❌
          </span>
        </div>
      )}
    </div>
  );
};

export default Node;
