import React from "react";
import { DataContext } from "../../dataContext";

export default function CourseResults({courseData}){
    const {groups, grades} = React.useContext(DataContext);

    const [results, setResults] = React.useState(0);

    React.useEffect(() => {
        // collect all grades from groups that are children of this course
        const results = []
        const courseGroups = groups.filter(group => group.parentId === courseData.myId);
        courseGroups.forEach(group => {
            grades.filter(grade => grade.parentId === group.myId).forEach(grade => {
                results.push(grade);
            });
        })


        // calculate score
        const score = results.reduce((acc, item) => {
            if(!item.grade || !item.weight){return acc}
            return acc + (item.grade * item.weight/100);
        }, 0);

        

        setResults(score);
    }, [groups, grades, courseData.myId])



    return(
        <section className="card">
           Results&ensp;
           <span id="course-average">{+results.toFixed(2)}</span>
        </section>
    )
}