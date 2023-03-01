import React, { useEffect } from "react";

export default function PopupInput() {
    const [hh, setHeight] = React.useState(window.visualViewport.height);
    const [vpBottom, setVpBottom] = React.useState(0);


    window.visualViewport.addEventListener('resize', update);

    function update() {
        console.log("update", window.visualViewport.height);
        setHeight(window.visualViewport.height + "  ---  " + window.innerHeight);
        setVpBottom(window.innerHeight - window.visualViewport.height);
    }


    // function to disable scrolling
    useEffect(() => {
        // functions
        function preventDefault(e) {
            e.preventDefault();
        }
        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

        // variables
        var supportsPassive = false;
        var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
        try {
            window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () { supportsPassive = true; return true}
            }));
        } catch (e) { }
        var wheelOpt = supportsPassive ? { passive: false } : false;
        var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

        // listeners
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);

        
        return () => {
            // remove listners
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            window.removeEventListener('touchmove', preventDefault, wheelOpt);
            window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
        }
    }, []);








    return (
        <>
            <div id="popup-backdrop"></div>
            <div id="popup-input" style={{ bottom: vpBottom }}>
                Height = {hh}
                <input type="text" />
            </div>
        </>

    )

    // https://stackoverflow.com/questions/59673557/how-to-fix-viewport-in-place-when-virtual-keyboard-opens-in-mobile-safari
    // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
}