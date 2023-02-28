import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import DropdownMenu from "../buttons/DropdownMenu";
import Course from "./Course";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Term({termData}) {
    const { courses } = React.useContext(DataContext);

    // my data
    const dataCategory = "term";
    const childCategory = "course";
    const myName = termData.name;
    const myId = termData.myId;

    const courseElements = courses.filter(e => e.parentId === myId).map((course, index) => {
        return(
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Course courseData={course} />
            </CSSTransition>
            
        )
    });

    return (
        <div className="term">
            <span className="term-title">{myName}</span>
            <TransitionGroup className="term-courses-container">
                {courseElements}
            </TransitionGroup>
            <DropdownMenu dataCategory={dataCategory} id={myId}/>
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}