import React from "react";
import "./Grades.css";
import { DataContext } from "../../dataContext";
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default function GradeView() {
    const { activeElement, setActiveElement } = React.useContext(DataContext);

    return (
        <TransitionGroup>
            {/* Backdrop */}
            {activeElement && <CSSTransition key={"bruh"} timeout={300} classNames="fade-item">
                <div id="grade-view-backdrop" onClickCapture={() => setActiveElement(false)}>

                </div>
            </CSSTransition>
            }

            {/* Content */}
            {activeElement && <CSSTransition key={"bruh2"} timeout={300} classNames="slide-item">
                <div id="grade-view-container">
                    <div id="grade-view">
                        <div id="grade-view-header">
                            <h1>{activeElement}</h1>
                        </div>
                        <section id="grade-view-body">

                            stuff in here
                        </section>

                    </div>
                </div>
            </CSSTransition>
            }
        </TransitionGroup>
    )
}