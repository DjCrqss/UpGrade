import React, { useState, createContext } from 'react';

export const DataContext = createContext({});

export const DataContextProvider = (props) => {
    const mockYears = [
        {
            name: 2023,
            myId: 0,
        },
        {
            name: 2022,
            myId: 1,
        }
    ]
    const mockTerms = [
        {
            name: "Semester 1",
            parentId: 0,
            myId: 0,
        }
    ]
    const mockCourses = [
        {
            name: "COMP103",
            parentId: 0,
            myId: 0,
        }
    ]
    const mockGroups = [
        {
            name: "Exams",
            parentId: 0,
            myId: 0,
        }
    ]
    const mockGrades = [
        {
            name: "Exam 1",
            parentId: 0,
            myId: 0,
        }
    ]



    // Custom variables
    const [years, setYears] = useState(mockYears);
    const [terms, setTerms] = useState(mockTerms);
    const [courses, setCourses] = useState(mockCourses);
    const [groups, setGroups] = useState(mockGroups);
    const [grades, setGrades] = useState(mockGrades);


    function renameItem(dataCategory,id, payload) {
        switch (dataCategory) {
            case "years":
                const modifiedYears = [...years]
                Object.assign(modifiedYears[id], payload);
                setYears(modifiedYears);
                break;
            case "terms":
                const modifiedTerms = [...terms]
                Object.assign(modifiedTerms[id], payload);
                setTerms(modifiedTerms);
                break;
            case "courses":
                const modifiedCourses = [...courses]
                Object.assign(modifiedCourses[id], payload);
                setCourses(modifiedCourses);
                break;
            case "groups":
                const modifiedGroups = [...groups]
                Object.assign(modifiedGroups[id], payload);
                setGroups(modifiedGroups);
                break;
            case "grades":
                const modifiedGrades = [...grades]
                Object.assign(modifiedGrades[id], payload);
                setGrades(modifiedGrades);
                break;
            default:
                console.log("Error: rename dataCategory not found");
                break;
        }
    }

    function addItem(dataCategory, payload) {
        switch (dataCategory) {
            case "years":
                const modifiedYears = [...years]
                modifiedYears.push(payload);
                setYears(modifiedYears);
                break;
            case "terms":
                const modifiedTerms = [...terms]
                modifiedTerms.push(payload);
                setTerms(modifiedTerms);
                break;
            case "courses":
                const modifiedCourses = [...courses]
                modifiedCourses.push(payload);
                setCourses(modifiedCourses);
                break;
            case "groups":
                const modifiedGroups = [...groups]
                modifiedGroups.push(payload);
                setGroups(modifiedGroups);
                break;
            case "grades":
                const modifiedGrades = [...grades]
                modifiedGrades.push(payload);
                setGrades(modifiedGrades);
                break;
            default:
                console.log("Error: rename dataCategory not found");
                break;
        }
    }

    function removeItem(dataCategory, myId) {
        switch (dataCategory) {
            case "years":
                const modifiedYears = [...years]
                const removeYearsIndex = modifiedYears.map(e => e.myId).indexOf(myId);
                modifiedYears.splice(removeYearsIndex, 1);
                setYears(modifiedYears);
                break;
            case "terms":
                const modifiedTerms = [...terms]
                const removeTermsIndex = modifiedTerms.map(e => e.myId).indexOf(myId);
                modifiedTerms.splice(removeTermsIndex, 1);
                setTerms(modifiedTerms);
                break;
            case "courses":
                const modifiedCourses = [...courses]
                const removeCoursesIndex = modifiedCourses.map(e => e.myId).indexOf(myId);
                modifiedCourses.splice(removeCoursesIndex, 1);
                setCourses(modifiedCourses);
                break;
            case "groups":
                const modifiedGroups = [...groups]
                const removeGroupsIndex = modifiedGroups.map(e => e.myId).indexOf(myId);
                modifiedGroups.splice(removeGroupsIndex, 1);
                setGroups(modifiedGroups);
                break;
            case "grades":
                const modifiedGrades = [...grades]
                const removeGradesIndex = modifiedGrades.map(e => e.myId).indexOf(myId);
                modifiedGrades.splice(removeGradesIndex, 1);
                setGrades(modifiedGrades);
                break;
            default:
                console.log("Error: rename dataCategory not found");
                break;
        }

    }
        


    const dataContextStore = {
        years,
        terms,
        courses,
        groups,
        grades,
        renameItem,
        addItem,
        removeItem
    }

    return <DataContext.Provider value={dataContextStore}>{props.children}</DataContext.Provider>
}