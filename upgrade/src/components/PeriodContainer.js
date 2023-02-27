import React from "react";
import { DataContext } from "../dataContext";
import Year from "./time_periods/Year";
import AddItemButton from "./buttons/AddItemBtn";

export default function PeriodContainer() {
    const { years } = React.useContext(DataContext);
    const childCategory = "years";
    const myId = null;

    const yearElements = years.map((year, index) => {
        return(
            <Year
                key={index}
                yearData={year}
            />
        )
    })



    
    
    return (
        <div>
            {yearElements}
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}
