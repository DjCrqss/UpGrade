import React from "react";
import { DataContext } from "../../dataContext";

export default function AddItemButton({dataCategory, parentId}) {
    const { addItem } = React.useContext(DataContext);

    function action() {
        const name = prompt("Enter a name for the new item");
        const payload = {
            name: name,
            parentId: parentId
        }
        addItem(dataCategory, payload);
    }

    return (
        <button onClick={action}>+</button>
    );
}