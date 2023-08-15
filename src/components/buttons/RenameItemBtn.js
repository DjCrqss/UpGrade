import React, { useState, useEffect } from "react";
import { DataContext } from "../../dataContext";

export default function RenameItemButton({ dataCategory, id, clickAction, name }) {
    const { renameItem } = React.useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);
    const [newName, setNewName] = useState("");

    function action(e) {
        e.stopPropagation();
        if (!newName.trim()) {
            return;
        }
        const payload = {
            name: newName,
        };
        renameItem(dataCategory, id, payload);
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
        setNewName("");
        setIsOpen(true);
    }

    function closeDialog() {
        clickAction();
        setIsOpen(false);
    }

    function handleNameChange(e) {
        setNewName(e.target.value);
    }

    return (
        <div className="rename-item-button">
            <div className="time-period-menu-item" onClick={openDialog}>
                <span className="material-symbols-outlined">
                    drive_file_rename_outline
                </span>
                <span>Rename</span>
            </div>
            {isOpen && (
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    {/* add onclick to stop propogation */}
                    <div className="modal-content" >
                        <span className="modal-header">Rename {dataCategory}</span>
                        <div className="modal-input">
                            <input
                                type="text"
                                autoFocus
                                placeholder={name}
                                onChange={handleNameChange}
                            />
                            <button onClick={action}>Go</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
