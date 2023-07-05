import React from "react";
import { DataContext } from "../../dataContext";

export default function RenameItemButton({ dataCategory, id, clickAction, name }) {
    const { renameItem } = React.useContext(DataContext);

    function action(e) {
        clickAction(false);
        e.stopPropagation();
        const newName = prompt(`Rename ${name} to`).trim();
        if (!newName) { return }
        const payload = {
            name: newName,
        }
        renameItem(dataCategory, id, payload);
    }

    return (
        <div className="time-period-menu-item" onClickCapture={action}>
            <span className="material-symbols-outlined">
                drive_file_rename_outline
            </span>
            <span>Rename</span>
        </div>
    );
}