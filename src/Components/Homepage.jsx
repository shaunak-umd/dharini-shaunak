import React, { useEffect, useState } from "react";


const Homepage = () =>{

    //state of this component
    const [data,setData] = useState([]);

    //component did mount
    useEffect(()=>{
        (async() =>{
            const data =  await getHarryPotterData();
            setData(data);
        })()
        
    },[]);

    //get data from api
    async function getHarryPotterData() {
        const response = await fetch("https://hp-api.herokuapp.com/api/characters");
        //console.log(await response.json());
         return response.json();
      }

    

    return(
        <div>
        

        </div>
    )
}

export default Homepage;