
// function repit (s,n)
// {
//     return s.concat(s.at(-1).repeat(n-1))
// }
// console.log(repit("hello",3));



// function dub (str)
// {
//    return str.at(0).concat (str.at(-1)) 
// }
// console.log(dub("hello"));



// function tostr(num)
// {
//     if (typeof num==typeof "num"){return Number(num)}
//     return  `"${num}"`
// }
// console.log(tostr(345));



// function end(str)
// {
//     if (str.at(-1)=="s"){return true}
//     else return false
// }
// console.log(end("kjfsv"));



function rev(str)
{
    cnt=" "
    for (let i=str.length-1;i>=0;i-- )
    {
       cnt+=str[i];
       
    }
    return cnt.toUpperCase()
}
console.log(rev("abc"));




