import React from "react";
import { DataContext } from "../../dataContext";
import AddItemButton from "../buttons/AddItemBtn";
import DropdownMenu from "../buttons/DropdownMenu";

export default function Group({gradeData}) {
    const { renameItem } = React.useContext(DataContext);
    // my data
    const dataCategory = "grade";
    const myName = gradeData.name;
    const myId = gradeData.myId;

    function updateScore(content) {
        if(content < 0) content = 0;
        if(content > 100) content = 100;

        const payload = {
            grade: parseFloat(content),
        }
        renameItem(dataCategory, myId, payload);
    }

    function updateWeight(content) {
        if(content < 0) content = 0;
        if(content > 100) content = 100;

        const payload = {
            weight: parseFloat(content),
        }
        renameItem(dataCategory, myId, payload);
    }

    var opacity = {
        opacity: gradeData.weight > 0 ? 1 : 0.4,
    }

    return (
        <div className={`grade`} style={opacity}>
            <span className="grade-title">{myName}</span>
            <div className="grade-score"><input className="percentage-input" type="number" min="0" max="100" value={gradeData.grade || ''} onChange={e => updateScore(e.target.value)}></input>%</div>
            <div className="grade-weight"><input className="percentage-input" type="number" min="0" max="100" value={gradeData.weight || ''} onChange={e => updateWeight(e.target.value)}></input>%</div>
            {/* <DropdownMenu dataCategory={dataCategory} id={myId}  name={myName}/> */}
        </div>
    );
}