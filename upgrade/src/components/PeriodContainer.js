import React from "react";
import { DataContext } from "../dataContext";
import Year from "./time_periods/Year";
import AddItemButton from "./buttons/AddItemBtn";

export default function PeriodContainer() {
    const { years } = React.useContext(DataContext);
    const childCategory = "year";
    const myId = null;

    const yearElements = years.map((year, index) => {
        return(
            <Year key={index}  yearData={year} />
        )
    })
    
    return (
        <div id="period-container">
            <div id="year-container">
                 {yearElements}
                <div id="mock-add-year-button">
                    <AddItemButton dataCategory={childCategory} parentId={myId} />
                </div>
            </div>
        </div>
    );
}
