const partnerData=[
    {
        id:1,
        Fname:"Rabin",
        Lname:"Bista",
        age:20,
        mStatus:"Unmarried",
        gender:"Male",
        location:
        {permanentLocation:{city:"Okhaldhunga",country:"Nepal"},
    currentLocation:{city:"Ktm",country:"Nepal"}}
    },
    {
        id:2,
        Fname:"Prabina",
        Lname:"Khadka",
        age:26,
        mStatus:"Married",
        partnerLName:"Khadka",
        partnerFName:"Prabin",
        gender:"Female",
        location:
        {permanentLocation:{city:"Toranto",country:"US"},
    currentLocation:{city:"Washington",country:"US"}}
    },
        {
        id:3,
        Fname:"LILY",
        Lname:"Str",
        age:19,
        mStatus:"Unmarried",
        gender:"Female",
        location:
        {permanentLocation:{city:"Madrid",country:"Spain"},
    currentLocation:{city:"Barcelona",country:"Spain"}}
    }
]

const shadiApiResponse={
    Status:200,
    message:"Data Fetched",
    data:partnerData
}


const getMyPartner=()=>{
    if(shadiApiResponse.Status===200){
//         if(shadiApiResponse.data[Status]==="Unmarried" && shadiApiResponse.data[age]>=19){
//             if(shadiApiResponse.data[location].permanentLocation==="Spain"){
// const res= shadiApiResponse.data
//             }
shadiApiResponse.data.map((candidate)=>{
    const{gender,age,mStatus,location}=candidate
    const myReq=(gender==="Female" && mStatus==="Unmarried") && age>=18
    myReq&&
        location.currentLocation.country==="Spain"?
        console.log(`My perfect Match is ${candidate.Fname} ${candidate.Lname}`):
        console.log("KEEP TRYING BROTHER")
})        
        }
    }


// const getCountry=()=>{
//     let nameCountry=[]
//     shadiApiResponse.data.map((candidate)=>{
//         const{gender,age,mStatus,location}=candidate
//         candidate.location.map((place)=>{
//             nameCountry.includes(place.country)?null:
//             nameCountry.push(place.country)
//         })
//     })
//     return nameCountry
// }
// console.log(getCountry())
