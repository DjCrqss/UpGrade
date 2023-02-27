import React from "react";
import { DataContext } from "../../dataContext";

export default function RenameItemButton({dataCategory, id}) {
    const { renameItem } = React.useContext(DataContext);

    function action() {
        const newName = prompt("Enter a new name for the item");
        const payload = {
            name: newName,
        }
        renameItem(dataCategory, id, payload);
    }

    return (
        <button onClick={action}>R</button>
    );
}