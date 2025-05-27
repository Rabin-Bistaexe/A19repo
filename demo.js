// const fname="Abdul"
// const lname="Kalam"

// const addName=()=>{
//     return `${fname} ${lname}`
// }
// console.log(addName())


// const a1=[-3,-2,-1]
// const a2=[0,1,2]
// const addArray=()=>{
//     const res=[...a1,...a2]
//     return res
// }
// console.log(addArray())


const userData={
    nm:"Rabin",
    email:"bistrabin85@gmail.com",
    phn:9766536348,
    hasPassedOut:false,
    kam:undefined
}

const filterFalseValue=()=>{
     finalUserData={}
    for(let key in userData){
        if(userData[key]){
            finalUserData={...finalUserData,[key]:userData[key]}
        }    

    }
    return finalUserData
    }

console.log(filterFalseValue())


const apiRes={
    stat:404,
    msg:"NOT FOUND",
    data:{}
}
let thisFinalUserData={}
const checkapiRes=()=>{
    if(apiRes.stat===200 && apiRes.data){
        thisFinalUserData=thisFinalUserData
    }
    else{
        thisFinalUserData=finalUserData
    }
    return thisFinalUserData
}
console.log(checkapiRes())



