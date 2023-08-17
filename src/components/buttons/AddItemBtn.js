import React, { useState, useEffect } from "react";
import { DataContext } from "../../dataContext";

export default function AddItemButton({dataCategory, parentId, needsName}) {
    const { addItem } = React.useContext(DataContext);

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");

    const className = `new-button-link new-button-${dataCategory}`;

    useEffect(() => {
        if (isOpen && needsName !== false) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, needsName]);

    function handleOutsideClick(e) {
        const modalContent = document.querySelector(".modal-content");
        if (modalContent && !modalContent.contains(e.target)) {
            closeDialog();
        }
    }
    function openDialog() {
        if (needsName == false) {
            action();
            return;
        }

        setIsOpen(true);
    }

    function closeDialog() {
        setIsOpen(false);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function action() {
        if (needsName !== false && name.trim() === "") {
            return;
        }

        const payload = {
            name: name.trim(),
            parentId: parentId
        };
        addItem(dataCategory, payload);
        setName("");
        closeDialog();
    }

    return (
        <div className="new-button-container">
            <span className={className} onClick={openDialog}>Add {dataCategory}</span>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-header">Name for new {dataCategory}</span>
                        <div className="modal-input">
                       
                        {needsName !== false && (
                            <input type="text" autoFocus value={name} onChange={handleNameChange} />
                            )}
                        <button onClick={action}>Go</button>
                            </div>
                    </div>
                </div>
            )}
        </div>
    );
}
