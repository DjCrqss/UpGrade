import React from "react";
import { DataContext } from "../../dataContext";

export default function RemoveItemButton({dataCategory, id, clickAction}) {
    const { removeItem } = React.useContext(DataContext);

    function action(e) {
        clickAction(false);
        e.stopPropagation();
        const confirm = window.confirm(`Are you sure you want to delete this ${dataCategory}?`);
        if(!confirm){return}
        removeItem(dataCategory, id);
    }

    return (
        <div className="time-period-menu-item" onClickCapture={action}>
            <span className="material-symbols-outlined">
                delete
            </span>
            <span>Delete</span>
        </div>
    );
}