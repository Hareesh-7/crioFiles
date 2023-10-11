// const curencies = require('path/fileName.json')

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("http server msg");
  // let date = new Date().toLocaleDateString();
  // let time = new Date().toLocaleTimeString();
  // console.log(date," ",time);

  // const serverInfo = {
  //     serverName: "Crio Server",
  //     version: "1.0.0",
  //     currentDate: new Date().toDateString(),
  //     currentTime: new Date().toTimeString(),
  // };
  // res.writeHead(200, { "Content-Type": "application.json"});
  // res.write(JSON.stringify(serverInfo));
  // res.end();

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
    res.write(`<h1>(serverInfo.serverName)</h1>`);
    res.end();
  } else if (req.url === "/currencies") {
    res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
    res.write(JSON.stringify(serverInfo));
    res.end();
  } else {
    res.write(404);
    res.end();
  }
});

server.listen(8082, () => {
  console.log("server call back msg");
  // let date = new Date().toLocaleDateString();
  // let time = new Date().toLocaleTimeString();
  // console.log(date,time)
});

// const http = require('http');

// const server = http.createServer(() => {
//     console.log("hello from server");
//     console.log(new Date().toLocaleDateString());
//     console.log(new Date().toLocaleTimeString());
// })

// server.listen(8082, ()=>{
//     console.log('Listening...');
// });
