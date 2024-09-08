import axios from "axios";

export const getProtectedData = async()=>{
    const token = localStorage.getItem("token");
    if(!token){
        return null;
    }

    try {
        const response = await axios.get("https://reqres.in/api/your-endpoint",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return response;
        //   console.log(response);
    } catch (err) {
        // console.log("error"+err);
        
        
    }
}
export default getProtectedData;