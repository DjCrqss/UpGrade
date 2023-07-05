import React from "react";
import { DataContext } from "../../dataContext";

export default function AddItemButton({dataCategory, parentId, needsName}) {
    const { addItem } = React.useContext(DataContext);

    const className = `new-button-link new-button-${dataCategory}`;

    function action() {
        var name = "";
        if(needsName !== false){
            name = prompt(`Name for ${dataCategory}`);
            if(!name){return}
        }
        const payload = {
            name: name.trim(),
            parentId: parentId
        }
        addItem(dataCategory, payload);
    }

    return (
        <div className="new-button-container">
            <span className = {className} onClick={action}>Add {dataCategory}</span>
        </div>
    );
}