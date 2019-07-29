const http = require('http');
const router = require('./router.js');
const PORT = process.env.PORT || 4008;

const server = http.createServer(router)
server.listen(PORT,()=>{
  console.log(` This project is working on a port ${PORT}!`);
});
