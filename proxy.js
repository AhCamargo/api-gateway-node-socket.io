const httpProxy = require('http-proxy')

const server = httpProxy.createServer({
  target: {
    protocol: 'https:',
    host: 'backend-box-transfer.herokuapp.com',
    port: 443,
  },
  changeOrigin: true,
}, );


const port = 3030;
server.listen(port, () => {
  console.log(`## - API-GATEWAY(Node.JS) - ## Server started on port ${port}!`);
});