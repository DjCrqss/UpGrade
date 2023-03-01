import React, { useRef } from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import Term from "./Term";
import DropdownMenu from "../buttons/DropdownMenu";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Year({yearData}) {
    const { terms, colours } = React.useContext(DataContext);

    // my data
    const dataCategory = "year";
    const childCategory = "term";
    const myName = yearData.name;
    const myId = yearData.myId;
    const myRef = useRef();

    function getTermTheme(index){
        // add my id to the index to get a unique theme for each year
        const roundedIndex = (index + myId.charCodeAt(0) ) % colours.length;
        return colours[roundedIndex];
    }

    const handleScroll = ref => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const termElements = terms.filter(e => e.parentId === myId).map((term, index) => {
        return(
            <CSSTransition key={index} timeout={300} classNames="fade-item">
                <Term termData={term} theme={getTermTheme(index)} />
            </CSSTransition>
        )
    });

    return (
        <div className="year" ref={myRef} onClick={() => handleScroll(myRef)}>
            <span className="year-title">{myName}</span>
            <TransitionGroup className="year-terms-container">
                {termElements}
            </TransitionGroup>
            <DropdownMenu dataCategory={dataCategory} id={myId}/>
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}