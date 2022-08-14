export default function StickerLItem ({style, item: {description, id}, onStickerClick, isEdit, onEditChange, onDeleteButtonClick, onShowModal}){
    function editing() {
        if (isEdit===id) {return (
            <textarea 
                className="textarea"
                onChange={onEditChange}
                onBlur={onShowModal}
                defaultValue={description} 
                onClick={(e) => {e.stopPropagation()}}
            />)
        } else {
             
            return (description)
        }
    }

    function buttonSaveClose() {
        return (
            <button 
                className="Tools_Button"
                onClick={onShowModal}
                style={{display: buttonSaveCloseShow()}}
                >
                Save/Cancel
            </button>
        )
    }

    function buttonSaveCloseShow() {
        if (isEdit===id) {return "block"} else {return "none"};
    }

    function deleteClick(e){
        e.stopPropagation(); 
        onDeleteButtonClick(id);
    }

    function openEditPage() {
        window.location.assign('/' + id);
    }

    return (
        <div className={style}>
            <div className="tools">
                {buttonSaveClose()}
                <button
                    className="Tools_Button"
                    onClick={openEditPage}>
                    edit
                </button>
                <button 
                    className="Tools_Button"
                    onClick={deleteClick}>
                    X
                </button>
            </div>
            <div 
                className="text" 
                onClick={openEditPage}
                >
                {editing()}
            </div>
        </div>
    )
}