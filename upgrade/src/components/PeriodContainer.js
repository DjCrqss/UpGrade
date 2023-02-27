import React from "react";
import { DataContext } from "../dataContext";
import Year from "./time_periods/Year";

export default function PeriodContainer() {
    const { years } = React.useContext(DataContext);

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
        </div>
    );
}
