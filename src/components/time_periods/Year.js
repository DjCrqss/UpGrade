import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import Term from "./Term";
import DropdownMenu from "../buttons/DropdownMenu";

export default function Year({yearData}) {
    const { terms } = React.useContext(DataContext);

    // my data
    const dataCategory = "year";
    const childCategory = "term";
    const myName = yearData.name;
    const myId = yearData.myId;

    const termElements = terms.filter(e => e.parentId === myId).map((term, index) => {
        return(
            <Term key={index} termData={term} />
        )
    });

    return (
        <div className="year">
            <span className="year-title">{myName}</span>
            <div className="year-terms-container">
                {termElements}
            </div>
            <DropdownMenu dataCategory={dataCategory} id={myId}/>
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}