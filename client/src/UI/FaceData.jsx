export const FachingData = async (items)=>{
    try{
        const response = await fetch(items,{
            method:"GET",
            headers:{
               "Content-Type":"application/json"
            }
        }) 
        if(!response.ok){
            throw new Error("something wrong")
        }
        const result = await response.json()
        return result
    }catch(error){
        console.log(error)
    }
}