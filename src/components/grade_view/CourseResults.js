import React from "react";
import { DataContext } from "../../dataContext";

export default function CourseResults({courseData}){
    const {groups, grades} = React.useContext(DataContext);

    const [results, setResults] = React.useState(0);
    const [amountToGoal, setAmountToGoal] = React.useState(0);
    const [totalWeight, setTotalWeight] = React.useState(0);

    React.useEffect(() => {
        // collect all grades from groups that are children of this course
        const results = []
        const courseGroups = groups.filter(group => group.parentId === courseData.myId);
        courseGroups.forEach(group => {
            grades.filter(grade => grade.parentId === group.myId).forEach(grade => {
                results.push(grade);
            });
        })


        // calculate score and weight
        var weight = 0;
        var score = results.reduce((acc, item) => {
            if(item.weight){ weight += item.weight;}
            if(!item.grade || !item.weight){return acc}
            return acc + (item.grade * item.weight);
        }, 0);
        score /= weight;
        weight /= 100;
        setTotalWeight(weight);

        // calculate amount to goal using remaing weight
        const amountToGoal = (courseData.gradeGoal - (score * weight)) / (1 - weight);
        setAmountToGoal(+amountToGoal.toFixed(2));
        if(isNaN(score)){score = 0}
        setResults(score);
    }, [groups, grades, courseData.myId, courseData.gradeGoal])



    const additionalWeight = () => {
        if(totalWeight < 1 && totalWeight > 0){
            return <span id="course-weight">Your grades only account for {+(totalWeight*100).toFixed(2)}% of your final grade.<br></br></span>
        } 
    }

    const additionalGrade = () => {
        if(isNaN(courseData.gradeGoal) || !courseData.gradeGoal){
            return "";
        }
        else if(amountToGoal < 0){
            return <span>You have already reached your goal of <span class="bold">{courseData.gradeGoal}%</span></span>
        } 
        else if (amountToGoal > 100){
            return <span>You can't reach your goal of <span class="bold">{courseData.gradeGoal}%</span> as you need <span class="bold">{amountToGoal}%</span></span>

        } else if (totalWeight === 0){
            return <span>You need a grade of <span class="bold">{courseData.gradeGoal}%</span> to reach your goal</span>
        }
        else if(totalWeight < 1){
            return <span>You need an additional grade of <span class="bold">{amountToGoal}%</span> to reach <span class="bold">{courseData.gradeGoal}%</span></span>
        }
    
    }


    return(
        <>
            {totalWeight > 1 && <section className="card">
                <h2>Warning</h2>
                Your total weights ({+(totalWeight*100).toFixed(2)}%) are above 100%!
                </section>
            }
            <section className="card">
            <h2>Results</h2>
            Your average so far is:
            <span id="course-average">{+results.toFixed(2)}%</span>

            {additionalWeight()}
            {additionalGrade()}

            </section>
        </>
    )
}