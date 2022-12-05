import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import ScatterPlot from "./ScatterPlot";
import CirclePacking from "./CirclePacking";


const Homepage = () =>{

    //state of this component
    const [data,setData] = useState([]);

    const flag = false;

    //component did mount
    useEffect(()=>{
    (async() =>{
    const data =  await getHarryPotterData();
    setData(data);
    })()
        
    },[]);

    //get data from api
    async function getHarryPotterData() 
    {
        fetch("https://hp-api.herokuapp.com/api/characters").then(response => {
            if (response && response.status === 200) {
                flag = true;
                return response.json();
            }
            return response.status;
        }).catch((error) => {
            console.log(error);
            return error;
        });
        //console.log(await response.json());
        // return response.json();
    }
    // console.log(data);

    if ( !flag)
        return (
            <div>
                API is not functional at this time.
            </div>
        );
    return(
        <div>
            <BarChart harry_potter_data={data}/>
            <BubbleChart harry_potter_data={data}/>
            <ScatterPlot harry_potter_data={data}/>
            <CirclePacking harry_potter_data={data}/>
        </div>
    )
}

export default Homepage;