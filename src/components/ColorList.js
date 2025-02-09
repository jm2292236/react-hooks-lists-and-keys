import React from "react";

function ColorList() {
    const colors = [
        "firebrick",
        "rebeccapurple",
        "salmon",
        "darkslategray",
        "hotpink",
        "blue",
        "green"
    ];

    // Create an array of li elements with the array colors
    const colorElements = colors.map(color => {
        return (
            <li key={color} style={{ color: color}}>
                {color}
            </li>
        )
    })
    console.log(colorElements);

    return (
        <div>
            <h1>Top {colors.length} CSS Colors</h1>
            <ol>
                {/* Display the the array of li elements */}
                {colorElements}
            </ol>
        </div>
    );
}

export default ColorList;
