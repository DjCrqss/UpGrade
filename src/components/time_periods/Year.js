import React, { useRef } from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import Term from "./Term";
import DropdownMenu from "../buttons/DropdownMenu";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Year({ yearData }) {
    const { terms, colours } = React.useContext(DataContext);

    // my data
    const dataCategory = "year";
    const childCategory = "term";
    const myName = yearData.name;
    const myId = yearData.myId;
    const myRef = useRef();

    function getTermTheme(index) {
        // add my id to the index to get a unique theme for each year
        const roundedIndex = (index + myId.charCodeAt(0)) % colours.length;
        return colours[roundedIndex];
    }

    const handleScroll = ref => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }

    const termElements = terms.filter(e => e.parentId === myId).map((term, index) => {
        return (
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Term termData={term} theme={getTermTheme(index)} skeleton="true" />
            </CSSTransition>
        )
    });

    return (
        <div className="year" ref={myRef} onClick={() => handleScroll(myRef)}>
            <span className="year-title">{myName}</span>
            {termElements.length <= 0 && <div className="skeleton-term">Add a term at the bottom!<div className="skeleton-course"><span>█████</span></div><div className="skeleton-course"><span>███</span></div><span className="skeleton-add">███ █████</span></div>}
            <TransitionGroup className="year-terms-container" in='true'>
                {termElements}
            </TransitionGroup>
            <DropdownMenu dataCategory={dataCategory} id={myId} name={myName} />
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}