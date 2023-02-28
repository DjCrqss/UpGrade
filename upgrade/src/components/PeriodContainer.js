import React from "react";
import { DataContext } from "../dataContext";
import Year from "./time_periods/Year";

export default function PeriodContainer() {
    const { years, addItem } = React.useContext(DataContext);
    const childCategory = "year";
    const curYear = new Date().getFullYear();
    const myId = null;

    const yearElements = years.map((year, index) => {
        return(
            <Year key={index}  yearData={year} />
        )
    })

    function addYear() {
        addItem(childCategory, {name: curYear, parentId: myId});
        document.getElementById("year-container").scrollTo({
            left: 0,
            behavior: "smooth",
          });
    }
    
    return (
        <div id="period-container">
            <div id="year-container">
                 {yearElements}
                <div id="mock-add-year-button" onClick = {() => addYear()}>
                    +
                </div>
            </div>
        </div>
    );
}
