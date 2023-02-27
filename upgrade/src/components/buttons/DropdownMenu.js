import React, { useState } from "react";
import RenameItemButton from "./RenameItemBtn";
import RemoveItemButton from "./RemoveItemBtn";
import useComponentVisible from "../common/Util";

export default function DropdownMenu({dataCategory, id}){
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();

    return (
        <div className="time-period-menu-container" ref={ref}>
            <button onClick={() => setIsComponentVisible(!isComponentVisible)}>...</button>
            <div  style={{padding: '0'}}>
                {isComponentVisible && <div className="time-period-menu-dropdown" >
                    <RemoveItemButton dataCategory={dataCategory} id={id} />
                    <RenameItemButton dataCategory={dataCategory} id={id} />
                </div>}
            </div>
        </div>
    );
}