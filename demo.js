const userdata=[
    {id:1,
        name: "ADDUL",
        gender: "Male",
        age:20,
        kam:undefined
    },
        {id:2,
        name: "Rabin",
        gender: "Male",
        age:19,
        kam:"Intern"
    },
        {id:3,
        name: "Srizan",
        gender: "Male",
        age:19,
        kam:"Python Developer"
    },
        {id:4,
        name: "Nabin",
        gender: "Male",
        age:19,
        kam:"Streamer"
    },
        {id:5,
        name: "Rabina",
        gender: "Female",
        age:21,
        kam:undefined
    },
        {id:6,
        name: "Sabina",
        gender: "Female",
        age:20,
        kam:undefined
    }
]
const response={
    status:200,
    message:"User data fetched",
    data:userdata
}

const fetchUserNames=()=>{
    if(response.status===200){
       const res= response.data
       .filter((user)=>user.kam || user.age>20) 
       
       .map((user)=> user.name)
       return res
    }
    else{
        const message="API fetch Failed"
        return message
    }
}
console.log(fetchUserNames())

