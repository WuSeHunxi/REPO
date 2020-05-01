import React from 'react';
import ReactDOM from 'react-dom';

//字符串
const content = "<h1>afasfasfd</h1><p>阿斯顿法定发送</p>";
const div = (
    // {想让字符串转成html，要加dangerouslySetInnerHTML属性}
    <div dangerouslySetInnerHTML={{
        __html: content
    }}>
    </div>
);

ReactDOM.render(div, document.getElementById("root"));