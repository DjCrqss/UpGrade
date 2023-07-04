import React from "react";
import "./Grades.css";
import { DataContext } from "../../dataContext";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CourseInfo from "./CourseInfo";
import GradesContainer from "./GradesContainer";
import CourseResults from "./CourseResults";


export default function GradeView() {
    const { activeElement, setActiveElement, getCourseById } = React.useContext(DataContext);
    const dataCategory = "course";

    const course = getCourseById(activeElement);
    console.log(course);

    return (
        <TransitionGroup>
            {/* Backdrop */}
            {activeElement && <CSSTransition key={"grade-view-backdrop"} timeout={300} classNames="fade-item">
                <><div id="grade-view-backdrop" onClickCapture={() => setActiveElement(false)}></div>
                <span id="grade-view-backdrop-text"  onClickCapture={() => setActiveElement(false)}>Close</span>
                </>
            </CSSTransition>
            }

            {/* Content */}
            {activeElement && <CSSTransition key={"grade-view-container"} timeout={300} classNames="slide-item">
                <div id="grade-view-container">
                    <div id="grade-view">
                        <div id="grade-view-header">
                            <h1>{course.name}</h1>
                        </div>
                        <main id="grade-view-body">
                            <CourseInfo dataCategory={dataCategory} course={course}/>
                            <GradesContainer courseData={course}/>
                            <CourseResults />
                        </main>
                    </div>
                </div>
            </CSSTransition>
            }
        </TransitionGroup>
    )
}