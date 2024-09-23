const fs=require('fs')
fs.writeFile('test.txt',"Node File System",(err)=>{
    if(err)
    {
        console.log(err)
    }
})
fs.appendFile('test.txt',"\nHello How Are You?",(err)=>{
    if(err)
    {
        console.log(err)
    }
})
fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(data)
    }
})