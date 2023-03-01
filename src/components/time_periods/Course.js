import React, { useRef } from "react";
import DropdownMenu from "../buttons/DropdownMenu";
import { DataContext } from "../../dataContext";

export default function Course({courseData, theme}) {
    // my data
    const dataCategory = "course";
    const myName = courseData.name;
    const myId = courseData.myId;
    const { setActiveElement } = React.useContext(DataContext);
    const myRef = useRef();

    // TODO: work out how to properly interact withthe page resize and scrollIntoView together
    function handleClick(e){
        myRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        e.stopPropagation();
        setActiveElement(myId);
        setTimeout(() => {
            myRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }, 310);
    }


   

    return (
        <div className={`course course-${theme}`} onClick={handleClick} ref={myRef}>
            <span className="course-title">{myName}</span>
            <DropdownMenu dataCategory={dataCategory} id={myId} name={myName}/>
        </div>
    );
}