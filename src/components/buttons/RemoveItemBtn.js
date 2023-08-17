import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../dataContext";

export default function RemoveItemButton({ dataCategory, id, clickAction }) {
    const { removeItem } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);

    function action(e) {
        e.stopPropagation();
        removeItem(dataCategory, id);
        closeDialog();
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    function handleOutsideClick(e) {
        e.stopPropagation();
        const modalContent = document.querySelector(".modal-content");
        if (modalContent && !modalContent.contains(e.target)) {
            closeDialog();
        }
    }

    function openDialog(e) {
        e.stopPropagation();
        setIsOpen(true);
    }

    function closeDialog() {
        clickAction();
        setIsOpen(false);
    }

    return (

        <div className="time-period-menu-item" onClick={openDialog}>
            <span className="material-symbols-outlined">
                delete
            </span>
            <span>Delete</span>
            {isOpen && (
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content">
                        <span className="modal-header">Delete this {dataCategory}?</span>
                        <div className="modal-input" style={{justifyContent: 'flex-end'}}>
                            <button onClick={closeDialog}>Cancel</button>
                            <button onClick={action} style={{backgroundColor: '#c26059', color: "#ffbab5"}}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}