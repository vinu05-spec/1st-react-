// import React from 'react'
// import Oimage from "./../assets/luffy.jpg"

// const Op = () => {
//   return (
//     <div className='bg-black w-auto p-4 rounded-2xl '>
//       <h1 className=' text-center scale-150 mt-7 mb-7 text-yellow-100 ' style={{ fontSize: '36px' }}>Welcome To One Piece</h1>
//     <div>
//       <div className='flex justify-center '>
//         <img src={Oimage} alt="OP" className='rounded-2xl  hover:scale-95 transition duration-300 ease-in-out'  style={{ width: '400px', height: 'auto' }} />
//       </div>
//       <div>
//         <h1 className='text-center scale-150 mt-7 mb-7 text-slate-300 font-bold'>Monkey D. Luffy</h1>
//         <ul className='list-disc list-inside text-white'>
//          <div className=''>
//           </div>
//          <div>
//          <h1 className="text-white" >Roronoa Zoro</h1>
//          <div>
//          <p className='text-stone-400'>He is a swordsman and a loyal member of the <b>Straw Hat Pirates</b>, led by Monkey D. Luffy. Zoro is known for his exceptional skill in swordsmanship, particularly his unique "Santoryu" style, which involves wielding three swords simultaneously. His dream is to become the world's greatest swordsman, a goal that drives him to seek out and defeat the legendary swordsman, Dracule Mihawk. Despite his serious and often stoic personality, Zoro's loyalty to his captain and crew is unwavering. He has a strong sense of honor and will do anything to protect his friends. Zoro is also known for his impressive physical strength, endurance, and resilience, often enduring immense pain and hardship without hesitation. His rivalry with Sanji, the Straw Hat cook, provides much of the comic relief in the series, though their bond is one of mutual respect. Zoro's backstory includes the tragic death of his childhood friend and fellow swordsman, Kuina, which fuels his determination to surpass her and achieve his dream. His signature trait is his incredible sense of direction, or rather, his lack of it, often getting lost even in familiar places.</p>
//             </div>
//             </div>

//           <li>Sanji</li>
//           <li>Nami</li>
//           <li>Nico Robin</li>
//           <li>Usopp</li>
//           <li>Tony Tony Chopper</li>
//           <li>Franky</li>
//           <li>Brook</li>
//           <li>Jimbe</li>

//         </ul>
//       </div>
//       <div>
//         <h1 className='text-center scale-150 mt-7 mb-7 text-slate-300 font-bold'>Story</h1>
//         <p className='text-white'>
//         One Piece is a story about a young adventurer named Monkey D. Luffy who sets out to find the legendary treasure, One Piece, and become the King of the Pirates:
// The story
// The story takes place in an alternate version of Earth during the "Golden Age of Pirates". The world is ruled by ruthless pirates, and only the strongest can claim the One Piece, a treasure left behind by the legendary pirate Gol D. Roger.
// The main character
// Luffy is a young man who dreams of becoming the King of the Pirates and raising his own crew. After eating a devil fruit, Luffy gains the power to make his body rubbery, which gives him great strength and agility.
// The treasure
// The One Piece is a fabled treasure that could elevate Luffy to the title of King of the Pirates. Roger, the former Pirate King, revealed the location of the One Piece before his execution by the World Government.
// The crew
// Luffy sets off on his adventure with his pirate crew, the Straw Hat Pirates.
// One Piece's Magic Explained
// One Piece is based on the manga by Eiichiro Oda and has been adapted into an anime series with movies and TV specials.
// What Is 'ONE PIECE' About? And What Is the Treasure? Creator ...
// 18 Sept 2023 — ONE PIECE is a legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of fr...

// Netflix
// One Piece (2023 TV series) - Wikipedia
// Premise. The series follows the adventures of the Straw Hat Pirates as they quest in search of the "One Piece", a fabled prestige ...

// Wikipedia
// One Piece (TV Series 1999– ) - Plot - IMDb
// Summaries * Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known a...

// IMDb
// Show all
//         </p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Op

import React from "react";
import TechCard from "../components/TechCard";
import limage from "./../assets/luffy.jpg";
import zimage from "./../assets/Z.jpg";
import simage from "./../assets/S.jpg";
import nimage from "./../assets/N.jpg";
import rimage from "./../assets/R.jpg";
import bimage from "./../assets/brook.png";
import logoimage from "./../assets/Oplogo.png"

const Op = () => {
  const technologies = [
    {
      name: "Roronova Zoro",
      Image: zimage,
      desc: " Zoro is one of the Straw Hat Crew's top three fighters, and his strength is considered so great that, when taking his stern personality into account, people occasionally mistake him as the captain of the Straw Hat Crew after witnessing ... ",
    },
    {
      name: "Sanji",
      Image: simage,
      desc: "One of Sanji's most easily noticeable characteristics is the kind, calm, cool, and collected manner in which he carries himself. He tends to speak in a very composed manner, even in dire situations, and rarely acts without thinking. His demeanor in a lot of ways can be compared to that of a secret agent.",
    },
    {
      name: "Nami",
      Image: nimage,
      desc: "Nami is a thief and pickpocket with cartographical, navigational, and meteorological skills. She was orphaned and taken in by Belle-Mère, a former navy seaman who became a tangerine farmer. Nami's dream is to draw a map of the world",
    },
    {
      name: "Nico Robin",
      Image: rimage,
      desc: "Robin has the ability to sprout an ear or eye within a certain distance of herself. She uses this ability to pick up on valuable information without being noticed. ",
    },
  ];

  return (
    <div className="bg-black w-full p-4 l overflow-hidden  ">
        <div>
            <img src={logoimage} alt="logo" style={{height:'135px' ,width:'400px'}} />
        </div>
      {/* <h1
        className=" text-center scale-150 mt-7 mb-7 text-yellow-100 "
        style={{ fontSize: "46px" }}
      >
        Welcome To One Piece
      </h1> */}
      <div>
        <div className="flex justify-center ">
          <img
            src={limage}
            alt="OP"
            className="rounded-2xl  hover:scale-95 transition duration-300 ease-in-out"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <div>
          <h1
            className="text-center scale-150 mt-20 mb-6 text-slate-300 font-bold"
            style={{ fontSize: "36px" }}
          >
            Monkey D. Luffy
          </h1>
          <p className="text-white mb-10">
            <b>
              Monkey D. Luffy is the captain of the Straw Hat Pirates , and
              dreamt of being a pirate since childhood from the influence of his
              idol and mentor Red-Haired Shanks. At the age of 17, Luffy sets
              sail from the East Blue Sea to the Grand Line in search of the
              legendary treasure, One Piece, to succeed Gol D.
            </b>
          </p>
        </div>
        <div>
          <h1
            className="font-bold text-white text-center mb-5"
            style={{ fontSize: "20px" }}
          >
            Character's
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {technologies.map((tech, index) => {
            return (
              <TechCard name={tech.name} image={tech.Image} desc={tech.desc} />
            );
          })}
        </div>
        <div>
          <h1
            className="font-bold text-white text-center mb-5"
            style={{ fontSize: "20px" }}
          >
            Short-Summary
          </h1>
          <div>
            <img src={bimage} alt="brook" />
          </div>
          <p className="text-white">
            <b>
              One Piece is a story about a young adventurer named Monkey D.
              Luffy who sets out to find the legendary treasure, One Piece, and
              become the King of the Pirates: The story The story takes place in
              an alternate version of Earth during the "Golden Age of Pirates".
              The world is ruled by ruthless pirates, and only the strongest can
              claim the One Piece, a treasure left behind by the legendary
              pirate Gol D. Roger. The main character Luffy is a young man who
              dreams of becoming the King of the Pirates and raising his own
              crew. After eating a devil fruit, Luffy gains the power to make
              his body rubbery, which gives him great strength and agility. The
              treasure The One Piece is a fabled treasure that could elevate
              Luffy to the title of King of the Pirates. Roger, the former
              Pirate King, revealed the location of the One Piece before his
              execution by the World Government. The crew Luffy sets off on his
              adventure with his pirate crew, the Straw Hat Pirates. One Piece's
              Magic Explained One Piece is based on the manga by Eiichiro Oda
              and has been adapted into an anime series with movies and TV
              specials. What Is 'ONE PIECE' About? And What Is the Treasure?
              Creator ... 18 Sept 2023 — ONE PIECE is a legendary high-seas
              quest unlike any other. Luffy is a young adventurer who has longed
              for a life of fr...
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Op;
