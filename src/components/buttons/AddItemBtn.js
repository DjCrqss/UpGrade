import React from "react";
import { DataContext } from "../../dataContext";

export default function AddItemButton({dataCategory, parentId}) {
    const { addItem } = React.useContext(DataContext);

    const className = `new-button-link new-button-${dataCategory}`;

    function action() {
        const name = prompt("Enter a name for the new item").trim();
        if(!name){return}
        const payload = {
            name: name,
            parentId: parentId
        }
        addItem(dataCategory, payload);
    }

    return (
        <div className="new-button-container">
            <span className = {className} onClick={action}>Add new {dataCategory}</span>
        </div>
    );
}