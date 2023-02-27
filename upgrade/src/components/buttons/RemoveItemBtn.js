import React from "react";
import { DataContext } from "../../dataContext";

export default function RemoveItemButton({dataCategory, id}) {
    const { removeItem } = React.useContext(DataContext);

    function action() {
        removeItem(dataCategory, id);
    }

    return (
        <button onClick={action}>X</button>
    );
}