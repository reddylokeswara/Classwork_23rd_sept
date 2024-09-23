const url=require('url')
const address="http://127.0.0.1:5500/login.php?username=chganeshprasad45%40gmail.com&password=Ganesh%403011"
const parseaddress=url.parse(address,true)
console.log("Host Name Is:",parseaddress.hostname)
console.log("PortNum: ",parseaddress.port)
console.log("Pathname: ",parseaddress.pathname)
const name=parseaddress.query
console.log(" parameters:",+parseaddress.query.name)
console.log("Name:",name)