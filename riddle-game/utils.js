import r1 from "./riddles/r1.js"
import r2 from "./riddles/r2.js"

export let all_riddles = [r1,r2]
export const player = {}

export function creatPlayer(name){
    player.name = name,
    player.times = []
    return player}

export function addSolveTime(player,duration){
    player.times.push(duration)
    return player
}

export function showStats(player){
    let totalTime = 0
    for(let i = 0; i<player.times.length;i++){
        totalTime += player.times[i]
    }
    let averageTime = totalTime/all_riddles.length
    console.log("total time is:",totalTime, "averag time is:",averageTime)
};
     

export function askRiddle(riddleObj){
    return riddleObj.name , riddleObj.taskDescription
}

export let total = 0
export function measureSolveTime(fn,riddleObj){
    let seconds = Date.now()/1000
    fn(riddleObj)
    let seconds1 = Date.now()/1000
return seconds1 - seconds
}