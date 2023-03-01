import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext({});

export const DataContextProvider = (props) => {
    // Global variables
    const colours = ["yellow", "blue", "green", "red", "pink", "purple"];
    const currentYear = new Date().getFullYear();
    // Custom variables
    const [years, setYears] = useState([{ name: currentYear, myId: createUniqueId([]), }]); // default year if none
    const [terms, setTerms] = useState([]);
    const [courses, setCourses] = useState([]);
    const [groups, setGroups] = useState([]);
    const [grades, setGrades] = useState([]);
    const [dataToSave, setDataToSave] = useState(false);
    const [activeElement , setActiveElement] = useState(false);
    const [isHome , setIsHome] = useState(true);


    function renameItem(dataCategory, id, payload) {
        switch (dataCategory) {
            case "year":
                const modifiedYears = [...years]
                const renameYearsIndex = modifiedYears.map(e => e.myId).indexOf(id);
                Object.assign(modifiedYears[renameYearsIndex], payload);
                setYears(modifiedYears);
                setDataToSave(true);
                break;
            case "term":
                const modifiedTerms = [...terms]
                const renameTermsIndex = modifiedTerms.map(e => e.myId).indexOf(id);
                Object.assign(modifiedTerms[renameTermsIndex], payload);
                setTerms(modifiedTerms);
                setDataToSave(true);
                break;
            case "course":
                const modifiedCourses = [...courses]
                const renameCoursesIndex = modifiedCourses.map(e => e.myId).indexOf(id);
                Object.assign(modifiedCourses[renameCoursesIndex], payload);
                setCourses(modifiedCourses);
                setDataToSave(true);
                break;
            case "group":
                const modifiedGroups = [...groups]
                const renameGroupsIndex = modifiedGroups.map(e => e.myId).indexOf(id);
                Object.assign(modifiedGroups[renameGroupsIndex], payload);
                setGroups(modifiedGroups);
                setDataToSave(true);
                break;
            case "grade":
                const modifiedGrades = [...grades]
                const renameGradesIndex = modifiedGrades.map(e => e.myId).indexOf(id);
                Object.assign(modifiedGrades[renameGradesIndex], payload);
                setGrades(modifiedGrades);
                setDataToSave(true);
                break;
            default:
                console.log("Error: rename dataCategory not found for rename");
                setDataToSave(true);
                break;
        }
    }

    function addItem(dataCategory, payload) {
        switch (dataCategory) {
            case "year":
                const modifiedYears = [...years]
                payload.myId = createUniqueId(modifiedYears);
                modifiedYears.unshift(payload);
                setYears(modifiedYears);
                setDataToSave(true);
                break;
            case "term":
                const modifiedTerms = [...terms]
                payload.myId = createUniqueId(modifiedTerms);
                modifiedTerms.push(payload);
                setTerms(modifiedTerms);
                setDataToSave(true);
                break;
            case "course":
                const modifiedCourses = [...courses]
                payload.myId = createUniqueId(modifiedCourses);
                modifiedCourses.push(payload);
                setCourses(modifiedCourses);
                setDataToSave(true);
                break;
            case "group":
                const modifiedGroups = [...groups]
                payload.myId = createUniqueId(modifiedGroups);
                modifiedGroups.push(payload);
                setGroups(modifiedGroups);
                setDataToSave(true);
                break;
            case "grade":
                const modifiedGrades = [...grades]
                payload.myId = createUniqueId(modifiedGrades);
                modifiedGrades.push(payload);
                setGrades(modifiedGrades);
                setDataToSave(true);
                break;
            default:
                console.log("Error: rename dataCategory not found for add");
                setDataToSave(true);
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
                setDataToSave(true);
                break;
            case "term":
                const modifiedTerms = [...terms]
                const removeTermsIndex = modifiedTerms.map(e => e.myId).indexOf(myId);
                modifiedTerms.splice(removeTermsIndex, 1);
                setTerms(modifiedTerms);
                setDataToSave(true);
                break;
            case "course":
                const modifiedCourses = [...courses]
                const removeCoursesIndex = modifiedCourses.map(e => e.myId).indexOf(myId);
                modifiedCourses.splice(removeCoursesIndex, 1);
                setCourses(modifiedCourses);
                setDataToSave(true);
                break;
            case "group":
                const modifiedGroups = [...groups]
                const removeGroupsIndex = modifiedGroups.map(e => e.myId).indexOf(myId);
                modifiedGroups.splice(removeGroupsIndex, 1);
                setGroups(modifiedGroups);
                setDataToSave(true);
                break;
            case "grade":
                const modifiedGrades = [...grades]
                const removeGradesIndex = modifiedGrades.map(e => e.myId).indexOf(myId);
                modifiedGrades.splice(removeGradesIndex, 1);
                setGrades(modifiedGrades);
                setDataToSave(true);
                break;
            default:
                console.log("Error: rename dataCategory not found for remove");
                setDataToSave(true);
                break;
        }

    }

    function getCourseById(id) {
        return courses.find(e => e.myId === id);
    }

    function loadLocalData() {
        const localYears = localStorage.getItem("years");
        const localTerms = localStorage.getItem("terms");
        const localCourses = localStorage.getItem("courses");
        const localGroups = localStorage.getItem("groups");
        const localGrades = localStorage.getItem("grades");

        if (localYears) setYears(JSON.parse(localYears));
        if (localTerms) setTerms(JSON.parse(localTerms));
        if (localCourses) setCourses(JSON.parse(localCourses));
        if (localGroups) setGroups(JSON.parse(localGroups));
        if (localGrades) setGrades(JSON.parse(localGrades));
    }

    useEffect(() => {
        if (!dataToSave) {return}

        // remove excess data
        const modifiedTerms = [...terms].filter(e => years.some(y => y.myId === e.parentId));
        const modifiedCourses = [...courses].filter(e => modifiedTerms.some(t => t.myId === e.parentId));

        // close course popup if element or it's parent is removed
        if(!modifiedCourses.some(e => e.myId === activeElement)){ setActiveElement(false);}

        // save data to local storage
        localStorage.setItem("years", JSON.stringify(years));
        localStorage.setItem("terms", JSON.stringify(modifiedTerms));
        localStorage.setItem("courses", JSON.stringify(modifiedCourses));
        localStorage.setItem("groups", JSON.stringify(groups));
        localStorage.setItem("grades", JSON.stringify(grades));

        setDataToSave(false);            
    }, [dataToSave, years, terms, courses, groups, grades, activeElement]);

    // Load data from storage on load
    useEffect(() => {
        loadLocalData();
    }, []);

    function createUniqueId(array) {
        const length = 10;
        while (true) {
            let id = Math.random().toString(36).substring(2, length + 2);
            if (!array.some(e => e.myId === id)) return id;
        }
    }

    // Handle back button
    useEffect(() => {
        if (!activeElement || !isHome) return;
        console.log("Course opened");
        window.history.pushState({}, {});
        setIsHome(false);
    }, [activeElement, isHome])

    window.onpopstate = () => {
        console.log("Back button pressed");
        setActiveElement(false);
        setIsHome(true);
    }


    const dataContextStore = {
        colours,
        years,
        terms,
        courses,
        groups,
        grades,
        activeElement,
        renameItem,
        addItem,
        removeItem,
        setActiveElement,
        getCourseById
    }

    return <DataContext.Provider value={dataContextStore}>{props.children}</DataContext.Provider>
}