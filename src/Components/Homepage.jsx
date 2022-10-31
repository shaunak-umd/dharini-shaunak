import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import Scatterplot from "./Scatterplot";


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
        
            <BarChart harry_potter_data={data}/>
            <Scatterplot data={data}/>
        </div>
    )
}

export default Homepage;