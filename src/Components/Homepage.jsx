import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import ScatterPlot from "./ScatterPlot";
import CirclePacking from "./CirclePacking";


const Homepage = () =>{

    // //state of this component
    const [data,setData] = useState([]);

    // //component did mount
    useEffect(()=>{
    (async() =>{
    // const data =  await getHarryPotterData();
    setData(data_test);
    })()
        
    },[]);

    // // //get data from api
    // // async function getHarryPotterData() 
    // // {
    // //     const response = await fetch("https://hp-api.herokuapp.com/api/characters");
    // //     //console.log(await response.json());
    // //     return response.json();
    // // }

    const data_test = 
    [
        {
            Name: 'Harry Potter',
            Gender: 'Male',
            Ancestry:'Half-blood',
            House: 'Gryffindor',
            BirthMonth: 'July',
            EyeColour: 'Green',
            HairColour: 'Black'
        },

        {
            Name: 'Hermione Granger',
            Gender: 'Female',
            Ancestry:'Muggleborn',
            House: 'Gryffindor',
            BirthMonth: 'September',
            EyeColour: 'Brown',
            HairColour: 'Brown'
        },

        {
            Name: 'Ron Weasley',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'March',
            EyeColour: 'Blue',
            HairColour: 'Red'
        },

        {
            Name: 'Albus Dumbledore',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'December',
            EyeColour: 'Green',
            HairColour: 'Grey'
        },

        {
            Name: 'Draco Malfoy',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Slytherin',
            BirthMonth: 'February',
            EyeColour: 'Blue',
            HairColour: 'Yellow'
        },

        {
            Name: 'Ginny Weasley',
            Gender: 'Female',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'June',
            EyeColour: 'Brown',
            HairColour: 'Red'
        },

        {
            Name: 'Severus Snape',
            Gender: 'Male',
            Ancestry:'Half-blood',
            House: 'Slytherin',
            BirthMonth: 'January',
            EyeColour: 'Black',
            HairColour: 'Black'
        },

        {
            Name: 'Rubeus Hagrid',
            Gender: 'Male',
            Ancestry:'Half-blood',
            House: 'Gryffindor',
            BirthMonth: 'July',
            EyeColour: 'Brown',
            HairColour: 'Brown'
        },

        {
            Name: 'Lord Voldemort',
            Gender: 'Male',
            Ancestry:'Half-blood',
            House: 'Slytherin',
            BirthMonth: 'December',
            EyeColour: 'Blue',
            HairColour: 'Bald'
        },

        {
            Name: 'Sirius Black',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'April',
            EyeColour: 'Brown',
            HairColour: 'Black'
        },

        {
            Name: 'Neville Longbottom',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'May',
            EyeColour: 'Brown',
            HairColour: 'Brown'
        },

        {
            Name: 'Lune Lovegood',
            Gender: 'Female',
            Ancestry:'Pure-blood',
            House: 'Ravenclaw',
            BirthMonth: 'November',
            EyeColour: 'Blue',
            HairColour: 'Yellow'
        },

        {
            Name: 'Minerva McGonagall',
            Gender: 'Feale',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'July',
            EyeColour: 'Brown',
            HairColour: 'Black'
        },

        {
            Name: 'Bellatrix Lestrange',
            Gender: 'Female',
            Ancestry:'Pure-blood',
            House: 'Slytherin',
            BirthMonth: 'October',
            EyeColour: 'Brown',
            HairColour: 'Black'
        },

        {
            Name: 'Remus Lupin',
            Gender: 'Male',
            Ancestry:'Half-blood',
            House: 'Gryffindor',
            BirthMonth: 'August',
            EyeColour: 'Blue',
            HairColour: 'Brown'
        },

        {
            Name: 'Dudley Dursley',
            Gender: 'Male',
            Ancestry:'Muggle',
            House: 'None',
            BirthMonth: 'July',
            EyeColour: 'Blue',
            HairColour: 'Yellow'
        },

        {
            Name: 'Vernon Dursley',
            Gender: 'Male',
            Ancestry:'Muggle',
            House: 'None',
            BirthMonth: 'September',
            EyeColour: 'Brown',
            HairColour: 'Brown'
        },

        {
            Name: 'Petunia Dursley',
            Gender: 'Female',
            Ancestry:'Muggle',
            House: 'None',
            BirthMonth: 'March',
            EyeColour: 'Blue',
            HairColour: 'Brown'
        },

        {
            Name: 'James Potter',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'June',
            EyeColour: 'Green',
            HairColour: 'Black'
        },

        {
            Name: 'Lily Potter',
            Gender: 'Female',
            Ancestry:'Muggleborn',
            House: 'Gryffindor',
            BirthMonth: 'October',
            EyeColour: 'Brown',
            HairColour: 'Red'
        },

        {
            Name: 'Molly Weasley',
            Gender: 'Female',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'March',
            EyeColour: 'Blue',
            HairColour: 'Brown'
        },

        {
            Name: 'Arthur Weasley',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'July',
            EyeColour: 'Green',
            HairColour: 'Red'
        },

        {
            Name: 'Charlie Weasley',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'September',
            EyeColour: 'Brown',
            HairColour: 'Red'
        },

        {
            Name: 'Bill Weasley',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'March',
            EyeColour: 'Blue',
            HairColour: 'Red'
        },

        {
            Name: 'Percy Weasley',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'July',
            EyeColour: 'Green',
            HairColour: 'Red'
        },

        {
            Name: 'Fred Weasley',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'September',
            EyeColour: 'Brown',
            HairColour: 'Red'
        },

        {
            Name: 'George Weasley',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Gryffindor',
            BirthMonth: 'September',
            EyeColour: 'Brown',
            HairColour: 'Red'
        },

        {
            Name: 'Lucius Malfoy',
            Gender: 'Male',
            Ancestry:'Pure-blood',
            House: 'Slytherin',
            BirthMonth: 'July',
            EyeColour: 'Green',
            HairColour: 'Yellow'
        },

        {
            Name: 'Fleur Delacour',
            Gender: 'Female',
            Ancestry:'Pure-blood',
            House: 'Hufflepuff',
            BirthMonth: 'September',
            EyeColour: 'Brown',
            HairColour: 'Yellow'
        },

        {
            Name: 'Narcissa Malfoy',
            Gender: 'Female',
            Ancestry:'Pure-blood',
            House: 'Slytherin',
            BirthMonth: 'July',
            EyeColour: 'Green',
            HairColour: 'Yellow'
        },

        {
            Name: 'Argus Filch',
            Gender: 'Male',
            Ancestry:'Squib',
            House: 'Hufflepuff',
            BirthMonth: 'September',
            EyeColour: 'Brown',
            HairColour: 'Brown'
        },

        {
            Name: 'Nymphadora Tonks',
            Gender: 'Female',
            Ancestry:'Pure-blood',
            House: 'Ravenclaw',
            BirthMonth: 'July',
            EyeColour: 'Green',
            HairColour: 'Pink'
        }
    ];


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
                <div className="font-garamond text-lg px-[20px] bg-theme-black text-white w-max">Let’s explore the world of data and wizarding world</div>
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
                <div className="font-garamond text-sm px-[20px] bg-theme-black text-white w-max">Disclaimer: We do not support any form of prejudice with respect to blood status. This is a post-you know who era ya’ll!!</div>
            </section>
            <section className="flex flex-col items-center gap-14 bg-frame7 py-[290px]">
                <div className="font-garamond text-sm px-[20px] bg-theme-black text-white w-max">Daily Prophet Reporters</div>
                <div className="font-garamond text-md px-[10px] bg-theme-black text-white w-max">Dharini & Shaunak</div>
                <br></br><br></br>
                <div className="font-garamond text-md px-[10px] bg-theme-white text-black w-max">Mischief Managed!</div>
                <br></br><br></br>
                <div className="font-garamond text-sm px-[10px] bg-theme-black text-white w-max">More details on <a href="https://github.com/shaunak-umd/dharini-shaunak/tree/main" target="_blank" className="cursor-fancy"><u>GitHub</u></a></div>
                
            </section>   
        </div>
    )
}

export default Homepage;