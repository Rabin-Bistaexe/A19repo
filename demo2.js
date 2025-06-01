const customer=[
    {id:1,name:"Rabin",bought:[{id:3,name:"Sweatshirt_and_shoes"},{id:2,name:"mobile_and_earphone"}],},
    {id:2,name:"Ritesh",bought:[{id:3,name:"Sweatshirt_and_shoes"},{id:2,name:"mobile_and_earphone"}],},
    {id:3,name:"LILY",bought:[{id:5,name:"cover"},{id:9,name:"ring"}],},
    {id:4,name:"rabina",bought:[{id:7,name:"bandage"},{id:9,name:"skateshoes"}]}
]

const apiResponse={
    status:200,
    msg:"Customer Data Fetched",
    data:customer
}
const getItemName=()=>{
    if(apiResponse.status===200){
        let buyProd=[]
        apiResponse.data.forEach((customer)=>{
            customer.bought.map((item)=>{
                buyProd.push(item.name)  
            })
        })
        return buyProd;
    }

}

const getProdNum=()=>{
    if(apiResponse.status===200){
        let getProdNumber={}

        apiResponse.data.forEach((customer)=>{
            customer.bought.map((item)=>{
                if(getProdNumber[item.id]){
                    getProdNumber[item.id]+=1
                }
                else{
                    getProdNumber[item.id]=1
                }
            })
        })
return getProdNumber
    }
}


console.log(getProdNum())