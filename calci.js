function add(a,b)
{
return a+b;
}
let sub=(a,b)=>{return a-b}
// exports.add=add
// exports.diff=sub
module.exports={
    add:add,
    diff:sub
}