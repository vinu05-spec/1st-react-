import React from 'react'
import Oimage from "./../assets/a.jpg"
import TechCard from '../components/TechCard'
import Nimage from "./../assets/b.jpg"
import bcimage from "./../assets/c.jpg"
import yimage from "./../assets/d.jpg"
import dsimage from "./../assets/e.jpg"
import Himage from "./../assets/HH.jpg"

const Home = () => {

    const technologies = [
        {
            name:"OnePiece",
            Image:Oimage,
            desc: "I'll become the King of the Pirates!"

        },
        {
            name:"Naruto",
            Image:Nimage,
            desc:"I will become the next Hokage of Hidden leaf village"

        },
        {
            name:"Black Clover",
            Image:bcimage,
            desc:"I'd rather die than give up! I'd rather die than give up! "

        },
        {
            name:"Your lie in April",
            Image:yimage,
            desc:"Everything I saw, everything I heard, everything I felt, all the scenery around me... started to take on color"

        },
        {
            name:"Demon Slayer",
            Image:dsimage,
            desc:"No matter how many people you may lose, you have no choice but to go on living - no matter how devastating the blows may be"

        },
        {
            name:"Haikyuu",
            Image:Himage,
            desc:"The last ones standing are the victors, only the strongest. If you want to be the last one standing, become strong"

        },

    ]

  return (
    <div className='bg-black  p-10'>
        <h1  className= ' mb-10 text-center text-yellow-100 text-2xl font-bold ' style={{fontSize: '46px' }}>
            Anime World
            </h1>
         <div className='grid grid-cols-3 gap-3'>
            {technologies.map((tech,index) => {

                return(
                    <TechCard
                    name={tech.name}
                    image={tech.Image}
                    desc={tech.desc}
                    />

                    
                )
            })}
            

            </div>
         </div>
         
  )
}

export default Home