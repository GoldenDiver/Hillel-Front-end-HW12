import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStickers, updateSticker } from "../services/stickers";

export default function StickerEdit() {
  const { id } = useParams();
  const [stickers, setStickers] = useState([]);
  const [newDescription, setNewDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getStickers(id)
      .then((data) => {setStickers(data); setNewDescription(data.description)})
  }, [])

  function onCancelClick () {
    navigate("../");
  }

  function onChange (e) {
    setNewDescription(e.target.value);
  }

  function onSaveClick () {
    const newSticker = { ...stickers, description: newDescription};
    updateSticker(newSticker)
      .then(() => setStickers(newSticker))
      .then(() => navigate("../"))
  }

  function text () {
    return (
      <textarea 
        className="edit_description"
        onChange={onChange}
        value={newDescription}
      />
    )
  }
  
  return (
    <div className="edit_page">
      <label>Change your description</label>
      {text()}
      <div className="edit_page_buttons">
        <button onClick={onCancelClick}>Cancel</button>
        <button onClick={onSaveClick}>Save</button>
      </div>
    </div>
    
  )
}