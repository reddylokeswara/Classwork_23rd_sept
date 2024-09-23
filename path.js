const path=require('path')
const pathFile="D:\\OneDrive\\Desktop\\classwork_23rd_sep\\path.js"
console.log(path.dirname(pathFile))
console.log(path.basename(pathFile))
console.log(path.extname(pathFile))
const newpathFile=path.join(path.dirname(pathFile),'http1.js')
console.log(newpathFile)