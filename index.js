const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log('req:',req);
  //  const requrl= req.url;
  // if(requrl=='/'){

  // }
//   console.log("HEllo");
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");

  res.write("<title>Server</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>HELLO This is serverM</h1>");
  res.write("</body>");
  res.write("</html>");

  return  res.end();
});

server.listen(3000);

// npm init
// node index.js
// Go to website - localhost:3000
