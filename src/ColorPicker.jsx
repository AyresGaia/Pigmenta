import { useState } from "react"

function ColorPicker(){

    const [color, setColor]=useState("#ffffff");


    function ColorChanger(e){
        setColor(e.target.value);
    }

    return(
        <body style={{backgroundColor: color}} onChange={ColorChanger}>

        <header>
        <h1>Pigmenta 🎨</h1>
        <p>Unleash the power of color magic</p>
        </header>
            
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: <br /> {color}</p>
            </div>
            <label >Select a Color:</label>
            <input type="color" value={color} onChange={ColorChanger}/>
        </div>
        <footer>Made with 💜 by Archduke</footer>
        </body>
    )
}

export default ColorPicker