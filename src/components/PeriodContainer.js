import React, { useRef } from "react";
import { DataContext } from "../dataContext";
import Year from "./time_periods/Year";
import './time_periods/Themes.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function PeriodContainer() {
    const { years, addItem, activeElement } = React.useContext(DataContext);
    const childCategory = "year";
    const curYear = new Date().getFullYear();
    const myId = null;
    const mockButtonRef = useRef();

    const yearElements = years.map((year, index) => {
        return (
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Year yearData={year} />
            </CSSTransition>
        )
    })

    function addYear() {
        let newName;
        if (years.some(year => year.name === curYear)) { newName = prompt("Enter a name for the new item").trim() }
        else { newName = curYear }
        addItem(childCategory, { name: newName, parentId: myId });
        document.getElementById("year-container").scrollTo({
            left: 0,
            behavior: "smooth",
        });
    }

    const handleScroll = ref => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return (
        <div id="period-container" >
            <TransitionGroup id="year-container" className={activeElement ? "small-view" : ""} >
                {yearElements}
                <CSSTransition key={'mock-add-button'} timeout={300} classNames="fade-item">
                    <div id="mock-add-year-button-container" ref={mockButtonRef} onClickCapture={() => handleScroll(mockButtonRef)}>
                        <div id="mock-add-year-button" onClick={() => addYear()}>
                            +
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}