import React from "react";
import DropdownMenu from "../buttons/DropdownMenu";
import { DataContext } from "../../dataContext";

export default function Course({courseData, theme}) {
    // my data
    const dataCategory = "course";
    const myName = courseData.name;
    const myId = courseData.myId;
    const { setActiveElement } = React.useContext(DataContext);


    return (
        <div className={`course course-${theme}`} onClick={()=>setActiveElement(myId)}>
            <span className="course-title">{myName}</span>
            <DropdownMenu dataCategory={dataCategory} id={myId} name={myName}/>
        </div>
    );
}