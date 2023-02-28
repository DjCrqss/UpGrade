import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import Term from "./Term";
import DropdownMenu from "../buttons/DropdownMenu";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Year({yearData}) {
    const { terms } = React.useContext(DataContext);

    // my data
    const dataCategory = "year";
    const childCategory = "term";
    const myName = yearData.name;
    const myId = yearData.myId;

    const termElements = terms.filter(e => e.parentId === myId).map((term, index) => {
        return(
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Term termData={term} />
            </CSSTransition>
        )
    });

    return (
        <div className="year">
            <span className="year-title">{myName}</span>
            <TransitionGroup className="year-terms-container">
                {termElements}
            </TransitionGroup>
            <DropdownMenu dataCategory={dataCategory} id={myId}/>
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}