import React from "react";
import useComponentVisible from "../common/Util";
import { DataContext } from "../../dataContext";

export default function AppMenu() {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();
    const { importData, exportData } = React.useContext(DataContext);

    function handleClick(e) {
        e.stopPropagation();
        setIsComponentVisible(!isComponentVisible)
    }

    function exportAction(e) {
        handleClick(e);
        e.stopPropagation();
        console.log("exporting...")
        
        const fileData = JSON.stringify(exportData());
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "grade-calculator-backup.json";
        link.href = url;
        link.click();
    }

    function importAction(e) {
        handleClick(e);
        e.stopPropagation();
        console.log("importing...")
        // open file picker
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileData = JSON.parse(e.target.result);
                importData(fileData);
            }
            reader.readAsText(file);
        }
        input.click();
    }

    return (
        <div className="time-period-menu-container" ref={ref}>
            <span className="material-symbols-outlined" id="app_menu_button" onClickCapture={handleClick}>
                more_vert
            </span>

            {isComponentVisible && <div className="time-period-menu-dropdown" >
                {/* Export backup */}
                <div className="time-period-menu-item" onClickCapture={exportAction}>
                    <span className="material-symbols-outlined">
                        ios_share
                    </span>
                    <span>Backup</span>
                </div>
                {/* Import backup */}
                <div className="time-period-menu-item" onClickCapture={importAction}>
                    <span className="material-symbols-outlined">
                        import_export
                    </span>
                    <span>Import</span>
                </div>
            </div>}

        </div>
    );
}