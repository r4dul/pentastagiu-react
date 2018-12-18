import React from 'react';
import ReactDOM from 'react-dom';

var viewportwidth = window.innerWidth;
viewportwidth = viewportwidth / 100 * 100;
var index = 0;
 function createDiv() {
    if (index < viewportwidth - 300) {
        index+=200;
    } else {
        index= 0;
    }
    var str = index+"px";
    let color = returnColor();
    const newDiv = React.createElement("div", { style: {marginLeft: `${str}`, backgroundColor: `${color}`, height: '200px', width: '200px'}});
    ReactDOM.render(newDiv, document.getElementById("root"));
    color = returnColor();
    const secondDiv = React.createElement("div", { style: { backgroundColor: `${color}`, height: '200px', width: '200px'}});
    ReactDOM.render(secondDiv, document.getElementById("second"));
 }

 function returnColor(){
    var str = "ABCDEF0123456789"; //14 chars
    var newStr = '#' + str[Math.floor(Math.random() * 14)] + str[Math.floor(Math.random() * 14)] + str[Math.floor(Math.random() * 14)] + str[Math.floor(Math.random() * 14)] + str[Math.floor(Math.random() * 14)] + str[Math.floor(Math.random() * 14)];
    console.log(newStr);
    return newStr;
}
 setInterval(createDiv, 1000);

/*function tick() {
    const date = new Date().toLocaleString();
    const dateElement = React.createElement('div', null, `Current date ${date}` );
    const component = (
    <div>
        <div>Continut static</div>
        
        {dateElement}
    </div>
    );
    ReactDOM.render(component, document.getElementById("root"));
}

setInterval(tick, 1000); */
