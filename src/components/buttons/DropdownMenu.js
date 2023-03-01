import React from "react";
import RenameItemButton from "./RenameItemBtn";
import RemoveItemButton from "./RemoveItemBtn";
import useComponentVisible from "../common/Util";

export default function DropdownMenu({ dataCategory, id }) {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();

    function handleClick(e){
        e.stopPropagation(); 
        setIsComponentVisible(!isComponentVisible)
      }

    return (
        <div className="time-period-menu-container" ref={ref}>
            <span className="material-symbols-outlined" onClickCapture={handleClick}>
                arrow_drop_down
            </span>

            {isComponentVisible && <div className="time-period-menu-dropdown" >
                <RenameItemButton dataCategory={dataCategory} id={id} clickAction={setIsComponentVisible} />
                <RemoveItemButton dataCategory={dataCategory} id={id} clickAction={setIsComponentVisible} />
            </div>}

        </div>
    );
}