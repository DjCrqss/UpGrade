import React from "react";
import { DataContext } from "../../dataContext";

export default function Group({ gradeData }) {
    const { renameItem, removeItem } = React.useContext(DataContext);
    // my data
    const dataCategory = "grade";
    const myName = gradeData.name;
    const myId = gradeData.myId;


    function updateName(content) {
        const payload = {
            name: content,
        }
        renameItem(dataCategory, myId, payload);
    }

    function updateScore(content) {
        if (content < 0) content = 0;
        if (content > 100) content = 100;

        const payload = {
            grade: +parseFloat(content).toFixed(2),
        }
        renameItem(dataCategory, myId, payload);
    }

    function updateWeight(content) {
        if (content < 0) content = 0;
        if (content > 100) content = 100;

        const payload = {
            weight: +parseFloat(content).toFixed(2),
        }
        renameItem(dataCategory, myId, payload);
    }

    function deleteGrade() {
        // const confirm = window.confirm(`Are you sure you want to delete this ${dataCategory}?`);
        // if(!confirm){return}
        removeItem(dataCategory, myId);
    }

    var opacity = {
        opacity: gradeData.weight > 0 ? 1 : 0.55,
    }

    return (
        <div >
            <div className={`grade`} style={opacity}>
                <input type="text" className="grade-title" value={myName} placeholder="Grade name" onChange={e => updateName(e.target.value)}></input>
                <div className="grade-score"><input className="percentage-input" type="number" min="0" max="100" value={gradeData.grade || ''} placeholder="0" onChange={e => updateScore(e.target.value)}></input>%</div>
                <div className="grade-weight"><input className="percentage-input" type="number" min="0" max="100" value={gradeData.weight || ''} placeholder="0" onChange={e => updateWeight(e.target.value)}></input>%</div>
                <span className="material-symbols-outlined delete-grade-btn" onClick={() => deleteGrade()}>close </span>
            </div>
        </div>
    );
}