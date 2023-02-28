import React from "react";
import DropdownMenu from "../buttons/DropdownMenu";

export default function Course({courseData}) {
    // my data
    const dataCategory = "course";
    const myName = courseData.name;
    const myId = courseData.myId;


    return (
        <div className="course">
            <span className="course-title">{myName}</span>
            <DropdownMenu dataCategory={dataCategory} id={myId}/>
        </div>
    );
}