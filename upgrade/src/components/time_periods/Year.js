import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import RemoveItemButton from "../buttons/RemoveItemBtn";
import RenameItemButton from "../buttons/RenameItemBtn";
import Term from "./Term";

export default function Year({yearData}) {
    const { terms } = React.useContext(DataContext);

    // my data
    const dataCategory = "years";
    const childCategory = "terms";
    const myName = yearData.name;
    const myId = yearData.myId;

    const termElements = terms.filter(e => e.parentId === myId).map((term, index) => {
        return(
            <Term key={index} termData={term} />
        )
    });

    return (
        <div>
            <h1>{myName}</h1>
            {termElements}
            <RemoveItemButton dataCategory={dataCategory} id={myId} />
            <RenameItemButton dataCategory={dataCategory} id={myId} />
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}