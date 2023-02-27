import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import RemoveItemButton from "../buttons/RemoveItemBtn";
import RenameItemButton from "../buttons/RenameItemBtn";
import Course from "./Course";

export default function Term({termData}) {
    const { courses } = React.useContext(DataContext);

    // my data
    const dataCategory = "terms";
    const childCategory = "courses";
    const myName = termData.name;
    const myId = termData.myId;

    const courseElements = courses.filter(e => e.parentId === myId).map((course, index) => {
        return(
            <Course key={index} courseData={course} />
        )
    });

    return (
        <div>
            <h2>{myName}</h2>
            {courseElements}
            <RemoveItemButton dataCategory={dataCategory} id={myId} />
            <RenameItemButton dataCategory={dataCategory} id={myId} />
            <AddItemButton dataCategory={childCategory} parentId={myId} />
        </div>
    );
}