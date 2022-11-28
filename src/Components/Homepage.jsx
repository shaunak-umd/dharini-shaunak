import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import ScatterPlot from "./ScatterPlot";
import CirclePacking from "./CirclePacking";


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
    async function getHarryPotterData() 
    {
        const response = await fetch("https://hp-api.herokuapp.com/api/characters");
        //console.log(await response.json());
        return response.json();
    }

    return(
        <div>
            <section className="flex flex-col items-center gap-14 bg-frame1 py-[360px]">
                <div className="font-playfair font-bold text-xl px-[20px] py-[10px] bg-theme-yellow text-black w-max">DataWiz: Magic is Everywhere</div>
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">A comprehensive collection of data by our new Daily Prophet reporters</div>
            </section>
            <BarChart harry_potter_data={data}/>
            <BubbleChart harry_potter_data={data}/>
            <ScatterPlot harry_potter_data={data}/>
            <CirclePacking harry_potter_data={data}/>
        </div>
    )
}

export default Homepage;