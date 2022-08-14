import { useEffect, useState } from "react";
import {
    useParams,
  } from "react-router-dom";
import { getStickers, updateSticker } from "../services/stickers";

export default function StickerEdit() {
    const { id } = useParams();
    const [stickers, setStickers] = useState([]);
    const [newDescription, setNewDescription] = useState('');

    useEffect(() => {
        getStickers()
            .then(data => setStickers(data))
    }, [])
    
    const sticker = stickers.find((sticker) => sticker.id === id);
    
    function getDescription () {
        return (sticker) ? (sticker.description) : ('')
    }

    function onCancelClick () {
        window.location.assign('/');
    }

    function onChange (e) {
        setNewDescription(e.target.value);
    }

    async function onSaveClick () {
        const newSticker = { ...sticker, description: newDescription};
        updateSticker(newSticker)
            .then(setStickers(stickers.map((sticker) => (sticker.id === id ? newSticker : sticker))))
            .then(window.location.assign('/'))
    }
    
    return (
        <div className="edit_page">
            <label>Change your description</label>
            <textarea 
                className="edit_description"
                onChange={onChange}
                defaultValue={getDescription()}
            />
            <div className="edit_page_buttons">
                <button onClick={onCancelClick}>Cancel</button>
                <button onClick={onSaveClick}>Save</button>
            </div>
        </div>
        
    )
}