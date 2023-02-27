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
            case "year":
                const modifiedYears = [...years]
                const renameYearsIndex = modifiedYears.map(e => e.myId).indexOf(id);
                Object.assign(modifiedYears[renameYearsIndex], payload);
                setYears(modifiedYears);
                break;
            case "term":
                const modifiedTerms = [...terms]
                const renameTermsIndex = modifiedTerms.map(e => e.myId).indexOf(id);
                Object.assign(modifiedTerms[renameTermsIndex], payload);
                setTerms(modifiedTerms);
                break;
            case "course":
                const modifiedCourses = [...courses]
                const renameCoursesIndex = modifiedCourses.map(e => e.myId).indexOf(id);
                Object.assign(modifiedCourses[renameCoursesIndex], payload);
                setCourses(modifiedCourses);
                break;
            case "group":
                const modifiedGroups = [...groups]
                const renameGroupsIndex = modifiedGroups.map(e => e.myId).indexOf(id);
                Object.assign(modifiedGroups[renameGroupsIndex], payload);
                setGroups(modifiedGroups);
                break;
            case "grade":
                const modifiedGrades = [...grades]
                const renameGradesIndex = modifiedGrades.map(e => e.myId).indexOf(id);
                Object.assign(modifiedGrades[renameGradesIndex], payload);
                setGrades(modifiedGrades);
                break;
            default:
                console.log("Error: rename dataCategory not found for rename");
                break;
        }
    }

    function addItem(dataCategory, payload) {
        switch (dataCategory) {
            case "year":
                const modifiedYears = [...years]
                payload.myId = createUniqueId(modifiedYears);
                modifiedYears.push(payload);
                setYears(modifiedYears);
                break;
            case "term":
                const modifiedTerms = [...terms]
                payload.myId = createUniqueId(modifiedTerms);
                modifiedTerms.push(payload);
                setTerms(modifiedTerms);
                break;
            case "course":
                const modifiedCourses = [...courses]
                payload.myId = createUniqueId(modifiedCourses);
                modifiedCourses.push(payload);
                setCourses(modifiedCourses);
                break;
            case "group":
                const modifiedGroups = [...groups]
                payload.myId = createUniqueId(modifiedGroups);
                modifiedGroups.push(payload);
                setGroups(modifiedGroups);
                break;
            case "grade":
                const modifiedGrades = [...grades]
                payload.myId = createUniqueId(modifiedGrades);
                modifiedGrades.push(payload);
                setGrades(modifiedGrades);
                break;
            default:
                console.log("Error: rename dataCategory not found for add");
                break;
        }
    }

    function removeItem(dataCategory, myId) {
        switch (dataCategory) {
            case "year":
                const modifiedYears = [...years]
                const removeYearsIndex = modifiedYears.map(e => e.myId).indexOf(myId);
                modifiedYears.splice(removeYearsIndex, 1);
                setYears(modifiedYears);
                break;
            case "term":
                const modifiedTerms = [...terms]
                const removeTermsIndex = modifiedTerms.map(e => e.myId).indexOf(myId);
                modifiedTerms.splice(removeTermsIndex, 1);
                setTerms(modifiedTerms);
                break;
            case "course":
                const modifiedCourses = [...courses]
                const removeCoursesIndex = modifiedCourses.map(e => e.myId).indexOf(myId);
                modifiedCourses.splice(removeCoursesIndex, 1);
                setCourses(modifiedCourses);
                break;
            case "group":
                const modifiedGroups = [...groups]
                const removeGroupsIndex = modifiedGroups.map(e => e.myId).indexOf(myId);
                modifiedGroups.splice(removeGroupsIndex, 1);
                setGroups(modifiedGroups);
                break;
            case "grade":
                const modifiedGrades = [...grades]
                const removeGradesIndex = modifiedGrades.map(e => e.myId).indexOf(myId);
                modifiedGrades.splice(removeGradesIndex, 1);
                setGrades(modifiedGrades);
                break;
            default:
                console.log("Error: rename dataCategory not found for remove");
                break;
        }

    }


    function createUniqueId(array) {
        const length = 10;
        while(true){
            let id =  Math.random().toString(36).substring(2, length+2);
            if(!array.some(e => e.myId === id)) return id;
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