import React from "react";
import { DataContext } from "../dataContext";
import Year from "./time_periods/Year";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function PeriodContainer() {
    const { years, addItem } = React.useContext(DataContext);
    const childCategory = "year";
    const curYear = new Date().getFullYear();
    const myId = null;

    const yearElements = years.map((year, index) => {
        return(
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Year yearData={year} />
            </CSSTransition>
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
             <TransitionGroup id="year-container">
             {yearElements}
                <div id="mock-add-year-button" onClick = {() => addYear()}>
                    +
                </div>
             </TransitionGroup>
        </div>
    );
}
