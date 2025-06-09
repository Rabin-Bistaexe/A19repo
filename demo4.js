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

const checkApi={
    msg:"DATA AAYO",
    data:partnerData
}

const getCountry=()=>{
    let countryNames=[]

    checkApi.data.map((candidate)=>{
    const{gender,age,mStatus,location}=candidate
        candidate.location.map((item)=>{
            countryNames.push(item.country)
        })
    })
    const res=countryNames.filter((country,index)=>{
        return countryNames.indexOf(country)==index
    })

    
}
console.log(getCountry())