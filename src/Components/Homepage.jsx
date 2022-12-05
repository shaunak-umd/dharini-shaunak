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
            <section className="flex flex-col items-center gap-14 bg-frame1 h-screen justify-center relative">
                <div className="font-playfair font-bold text-xl px-[20px] py-[10px] bg-theme-yellow text-black w-max">DataWiz: Magic is Everywhere</div>
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">A comprehensive collection of data by our new Daily Prophet reporters</div>
                <div className="absolute bottom-0">
                    <span className="material-symbols-outlined text-white text-xl animate-bounce">keyboard_double_arrow_down</span>
                </div>
            </section>
            <section className="flex flex-col items-center gap-14 bg-frame2 py-[430px]">
                <div className="font-playfair font-bold text-xl px-[30px] py-[10px] bg-theme-yellow text-black w-max">Welcome to Hogwarts!</div>
                <br></br><br></br>
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">Let’s explore the world of data and wizarding world</div>
                <div className="font-garamond text-md px-[10px] bg-theme-white text-black w-max">We Solemnly Swear That We Are Up to No Good</div>
            </section>
            <section className="flex flex-col items-center gap-14 bg-black py-[290px]">
                <div className="font-playfair font-bold text-xl px-[20px] py-[10px] bg-theme-white text-black w-max">All about wizards and their birthdays</div>
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">Number of wizards born in each month</div>
                <BarChart harry_potter_data={data}/>
            </section>
            <section className="flex flex-col items-center gap-14 bg-black py-[290px]">
                <div className="font-playfair font-bold text-xl px-[20px] py-[10px] bg-theme-white text-black w-max">Who is your favorite wizard or witch?</div>
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">Wizards and their eye colors -  we have a lot of Blue eyes!</div>
                <BubbleChart harry_potter_data={data}/>
            </section>
            <section className="flex flex-col items-center gap-14 bg-black py-[290px]">
                <div className="font-playfair font-bold text-xl px-[20px] py-[10px] bg-theme-white text-black w-max">Girl power at Hogwarts!</div>
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">Number of witches enrolled in Hogwarts so far</div>
                <ScatterPlot harry_potter_data={data}/>
            </section>
            <section className="flex flex-col items-center gap-14 bg-black py-[290px]">
                <div className="font-playfair font-bold text-xl px-[20px] py-[10px] bg-theme-white text-black w-max">Hogwarts is a diverse community!</div>
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">Witches and Wizards at Hogwarts by their ancestry</div>
                <CirclePacking harry_potter_data={data}/>
                <div className="font-garamond text-lg px-[20px] bg-theme-black text-white w-max">Disclaimer: We do not support any form of prejudice with respect to blood status. This is a post-you know who era ya’ll!!</div>
            </section>
            <section className="flex flex-col items-center gap-14 bg-frame7 py-[290px]">
                <div className="font-garamond text-md px-[20px] bg-theme-black text-white w-max">Daily Prophet Reporters</div>
                <div className="font-garamond text-md px-[10px] bg-theme-black text-white w-max">Dharini & Shaunak</div>
                <br></br><br></br>
                <div className="font-garamond text-sm px-[10px] bg-theme-black text-white w-max">More details on <a href="https://github.com/shaunak-umd/dharini-shaunak/tree/main" target="_blank" className="cursor-fancy"><u>GitHub</u></a></div>
                <br></br><br></br>
                <div className="font-garamond text-md px-[10px] bg-theme-white text-black w-max">Mischief Managed!</div>
            </section>   
        </div>
    )
}

export default Homepage;