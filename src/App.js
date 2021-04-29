import React from "react";

const viewHeight = 500;
const viewWidth = 500;

const App = () => {
    return <svg style = {{border: "3px solid pink", width: viewWidth, height: viewHeight}}>
        <circle cx="50" cy="50" r="5"/>
        <rect x="20" y="100" width="10" height="100" />
        <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
        <style>
            .small { font: italic 13px sans-serif; }
            .heavy { font: bold 30px sans-serif; }

            /* Note that the color of the text is set with the    *
            * fill property, the color property is for HTML only */
            .Rrrrr { font: italic 40px serif; fill: red; }
        </style>
        <text x="20" y="35" class="small">My</text>
        <text x="40" y="35" class="heavy">dog</text>
        <text x="55" y="55" class="small">is</text>
        <text x="65" y="55" class="Rrrrr">Grumpy!</text>
    </svg>;
};

export default App;