import { exit } from "process";
import {player,creatPlayer,all_riddles, measureSolveTime,askRiddle,addSolveTime ,total}from "./utils.js"
import input from "analiza-sync";

console.log("Welcome to the Riddle Game!");

const name = input("What is your name?");

creatPlayer(name);
addSolveTime(player,total);

function riddle(){
for(let i =0;i<all_riddles.length;i++){
    console.log(askRiddle(all_riddles[i],));
     console.log(`Riddle${i+1}`)
    let input_ch = input("enter: ")
    let temp = true
    
    while (input_ch !== all_riddles[i].correctAnswer){
        if (temp == true){
        input_ch = input("enter: ")
        temp = false
}}
}}
riddle()