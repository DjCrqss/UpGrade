import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import DropdownMenu from "../buttons/DropdownMenu";
import Group from "./Group";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function GradesContainer({courseData}) {
    const { groups } = React.useContext(DataContext);
    // my data
    const childCategory = "group";
    const myId = courseData.myId;

    const groupElements = groups.filter(e => e.parentId === myId).map((group, index) => {
        return(
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Group groupData={group} />
            </CSSTransition>
            
        )
    });

    return (
        <section className="card">
            {groupElements.length == 0 && <h2>Grades</h2>}
            <TransitionGroup className="course-groups-container" in='true'>
                {groupElements}
            </TransitionGroup>
            {/* Add group button */}
            <AddItemButton dataCategory={childCategory} parentId={myId}/>
        </section>
    );
}