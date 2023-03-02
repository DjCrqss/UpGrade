import React, { useRef } from "react";
import DropdownMenu from "../buttons/DropdownMenu";

export default function Grade({gradeData}) {
    // my data
    const dataCategory = "grade";
    const myName = gradeData.name;
    const myId = gradeData.myId;
    const myRef = useRef();

    return (
        <div className={`grade`} ref={myRef}>
            <span className="grade-title">{myName}</span>
            <DropdownMenu dataCategory={dataCategory} id={myId} name={myName}/>
        </div>
    );
}