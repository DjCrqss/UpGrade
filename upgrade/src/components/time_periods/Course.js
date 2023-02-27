import React from "react";
import RemoveItemButton from "../buttons/RemoveItemBtn";
import RenameItemButton from "../buttons/RenameItemBtn";

export default function Course({courseData}) {

    // my data
    const dataCategory = "courses";
    const myName = courseData.name;
    const myId = courseData.myId;

    console.log(courseData);

   

    return (
        <div>
            <h3>{myName}</h3>
            <RemoveItemButton dataCategory={dataCategory} id={myId} />
            <RenameItemButton dataCategory={dataCategory} id={myId} />
        </div>
    );
}