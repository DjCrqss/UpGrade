import React from "react";
import { DataContext } from "../../dataContext";

export default function RenameItemButton({dataCategory, id, clickAction}) {
    const { renameItem } = React.useContext(DataContext);

    function action() {
        const newName = prompt("Enter a new name for the item").trim();
        if(!newName){return}
        const payload = {
            name: newName,
        }
        renameItem(dataCategory, id, payload);
        clickAction(false);
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