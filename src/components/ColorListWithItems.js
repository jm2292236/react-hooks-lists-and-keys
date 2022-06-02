import ColorItem from "./ColorItem";

function ColorListWithItems() {
    const colors = [
        "firebrick",
        "rebeccapurple",
        "salmon",
        "darkslategray",
        "hotpink",
        "blue",
        "green",
        "black",
        "violet"
    ];

    // Create an array of ColorItem components with the array colors
    const colorElements = colors.map(color => {
        return (
            // The key goes here not in each li element
            <ColorItem key={color} color = {color} />
        )
    })
    console.log(colorElements);

    return (
        <div>
            <h1>Top {colors.length} CSS Colors</h1>
            <ol>
                {/* Display the the array of components */}
                {colorElements}
            </ol>
        </div>
    );
}

export default ColorListWithItems;
