import {entryPoint,exitPoint,maze} from './data.js'
import {markRightPath,walk} from './helpers'

 // (walk(entryPoint,exitPoint)) <-- path coordinates
for(let j = 0; j < markRightPath(maze,walk(entryPoint,exitPoint)).length; j++) {
    document.write("<br>");
    for(let n = 0; n < markRightPath(maze,walk(entryPoint,exitPoint))[0].length; n++) {
        document.write(markRightPath(maze,walk(entryPoint,exitPoint))[j][n], ' , ');
  }
}
