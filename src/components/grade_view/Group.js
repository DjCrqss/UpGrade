import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import DropdownMenu from "../buttons/DropdownMenu";
import Grade from "./Grade";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Group({ groupData }) {
    const { grades } = React.useContext(DataContext);

    // my data
    const dataCategory = "group";
    const childCategory = "grade";
    const myName = groupData.name;
    const myId = groupData.myId;

    const gradeElements = grades.filter(e => e.parentId === myId).map((grade, index) => {
        return (
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Grade gradeData={grade} />
            </CSSTransition>
        )
    });

    return (
        <div className={`group`}>
            <h2 className="group-title">{myName}</h2>
            <TransitionGroup className="group-grades-container" in='true'>
                <div className={`grade`}>
                    <span className="grade-table-header">Name</span>
                    <div className="grade-table-header">Score</div>
                    <div className="grade-table-header">Weight</div>
                </div>
                {gradeElements}
            </TransitionGroup>
            <DropdownMenu dataCategory={dataCategory} id={myId} name={myName} />
            {/* Add grade button */}
            <AddItemButton dataCategory={childCategory} parentId={myId} needsName={false} />
        </div>
    );
}