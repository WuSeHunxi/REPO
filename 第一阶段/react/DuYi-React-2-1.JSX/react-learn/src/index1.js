import React from 'react';
import ReactDOM from 'react-dom';

let num = 0;

setInterval(() => {
    num++;
    //重新渲染
    const div = (
        <div title="asdfadf">
            {num}
        </div>
    );
    ReactDOM.render(div, document.getElementById("root"));
}, 1000);