import React from "react";
import { DataContext } from "../../dataContext";

export default function RemoveItemButton({dataCategory, id, clickAction}) {
    const { removeItem } = React.useContext(DataContext);

    function action() {
        removeItem(dataCategory, id);
        clickAction(false);
    }

    return (
        <div className="time-period-menu-item" onClick={action}>
            <span className="material-symbols-outlined">
                delete
            </span>
            <span>Delete</span>
        </div>
    );
}