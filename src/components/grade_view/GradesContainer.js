import React from "react";
import { DataContext } from "../../dataContext";
import Group from "./Group";
import AddItemButton from "../buttons/AddItemBtn";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function GradesContainer({courseData}){
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
            <TransitionGroup className="gradeview-groups-container">
                {groupElements}
            </TransitionGroup>
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </section>
    );
}