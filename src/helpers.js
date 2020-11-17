import {maze,resoultData} from './data.js'

const checkPoint = (entryPoint,maze) => {
    let { x, y } = entryPoint;
    let rightCoords = [];
    if(maze[x-1] !== undefined) {
        rightCoords.push({x:x-1,y:y,value: maze[x-1][y]})
    }
    if(maze[x+1] !== undefined) {
        rightCoords.push({x:x+1,y:y,value: maze[x+1][y]})
    }
    if(maze[x][y-1] !== undefined) {
        rightCoords.push({x:x,y:y-1,value: maze[x][y-1]})
    }
    if(maze[x][y+1] !== undefined) {
        rightCoords.push({x:x,y:y+1,value: maze[x][y+1]})
    }
    return rightCoords.filter(item => item.value !== 'x' && item.value !== 'w')  
}

const markRightPath = (tempMaze,rightCoords) => {
    for(let i = 0; i < tempMaze.length; i++){
        for(let j = 0; j < tempMaze.length; j++){
            for(let key = 0; key < rightCoords.length; key++) {
                if(i === rightCoords[key].x && j === rightCoords[key].y) {
                    tempMaze[i][j] = '+'
                }
            }
        }
    }
    return tempMaze
}

const walk = (entryPoint,exitPoint) => {
    maze[entryPoint.x][entryPoint.y] = 'w';
    let cP = checkPoint(entryPoint,maze);
    if(cP.length > 0) {
        for(let i = 0; i < cP.length; i++) {
            let current = cP[i];
            resoultData.push(cP[i])
            let isSolved = current.x === exitPoint.x && current.y === exitPoint.y;
            let notVisited = maze[current.x][current.y] !== 'w';
            if(isSolved || (notVisited && walk(current,exitPoint))) { 
                resoultData.reverse();
                for(let i = 1; i < resoultData.length; i++) {
                    if(resoultData[i+1] && (Math.abs(resoultData[i].x - resoultData[i+1].x) + Math.abs(resoultData[i].y - resoultData[i+1].y)) > 1) {
                        resoultData.splice(i+1,1)
                        i--
                    } 
                }
                return resoultData;
            }
        }
    }
    return false
    
}

export { 
    checkPoint,
    markRightPath,
    walk
}

