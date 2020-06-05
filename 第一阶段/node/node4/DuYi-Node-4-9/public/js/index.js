// fetch("http://localhost:5008/api/student")
//   .then((resp) => resp.json())
//   .then((resp) => {
//     console.log(resp);
//   });

/**
 * 跨域在前端的使用
 */
function jsonp(url) {
  const script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
  script.onload = function () {
    script.remove();
  };
}

function callback(data) {
  console.log(data);
}

jsonp("http://localhost:5008/api/student");
