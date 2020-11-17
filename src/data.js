
const X = 'x';
const _ = "_";
const maze = [
    [X,X,X,X,_,X,X,X,X],
    [X,_,X,_,_,X,_,_,X],
    [X,_,X,X,_,X,_,X,X],
    [_,_,X,_,_,_,_,X,_],
    [X,_,X,_,X,_,X,X,X],
    [X,_,_,_,X,_,_,_,X],
    [X,X,X,X,X,X,X,X,X],
];

const entryPoint = {
    x:3,
    y:0 

}
const exitPoint = {
    x:0,
    y:4
}
let resoultData = [entryPoint]
export {
    resoultData,
    maze,
    entryPoint,
    exitPoint
}