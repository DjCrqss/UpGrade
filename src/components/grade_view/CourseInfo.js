import React from "react";
import { DataContext } from "../../dataContext";

export default function CourseInfo({dataCategory, course}){
    const { renameItem } = React.useContext(DataContext);

    function updateSummary(content) {
        const payload = {
            summary: content,
        }
        renameItem(dataCategory, course.myId, payload);
    }

    function updateGoal(content) {
        if(content < 0) content = 0;
        if(content > 100) content = 100;

        const payload = {
            gradeGoal: parseFloat(content),
        }
        renameItem(dataCategory, course.myId, payload);
    }

    return(
        <section className="cards-container">
            <div className="card">
               <h2>Summary</h2>
               <textarea rows='2' value={course.summary}  onChange={e => updateSummary(e.target.value)}></textarea>
            </div>
            <div className="card">
                <h2>Grade goal</h2>
                <input type="number" min="0" max="100" value={course.gradeGoal || ''} onChange={e => updateGoal(e.target.value)}></input>
            </div>
        </section>
    )
}