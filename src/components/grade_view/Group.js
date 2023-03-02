import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import DropdownMenu from "../buttons/DropdownMenu";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Grade from "./Grade";

export default function Group({groupData}) {
    const { grades } = React.useContext(DataContext);

    // my data
    const dataCategory = "group";
    const childCategory = "grade";
    const myName = groupData.name;
    const myId = groupData.myId;

    const gradeElements = grades.filter(e => e.parentId === myId).map((grade, index) => {
        return(
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Grade gradeData={grade}/>
            </CSSTransition>
            
        )
    });

    return (
        <div className={`gradeview-group`}>
            <span className="group-title">{myName}</span>
            <TransitionGroup className="group-grades-container">
                {gradeElements}
            </TransitionGroup>
            <DropdownMenu dataCategory={dataCategory} id={myId} name={myName}/>
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}