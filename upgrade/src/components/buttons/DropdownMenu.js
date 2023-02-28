import React from "react";
import RenameItemButton from "./RenameItemBtn";
import RemoveItemButton from "./RemoveItemBtn";
import useComponentVisible from "../common/Util";

export default function DropdownMenu({dataCategory, id}){
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();

    return (
        <div className="time-period-menu-container" ref={ref}>
            <span className="material-symbols-outlined" onClick={() => setIsComponentVisible(!isComponentVisible)}>
                arrow_drop_down
            </span>
            <div  style={{padding: '0'}}>
                {isComponentVisible && <div className="time-period-menu-dropdown" >
                    <RenameItemButton dataCategory={dataCategory} id={id} clickAction={setIsComponentVisible}/>
                    <RemoveItemButton dataCategory={dataCategory} id={id} clickAction={setIsComponentVisible}/>
                </div>}
            </div>
        </div>
    );
}