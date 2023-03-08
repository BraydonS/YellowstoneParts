let size = 4


let chessString = "";

for(let i = 0 ; i < size ; i++){
    for(let j = 0; j < size ; j++){
        if(i%2 == 0){
            chessString += " #";
        }
        else {
            chessString += "# ";
        }
    }
    chessString += "\n"
}

// Double chess string to get proper grid size in y dimension
chessString += chessString

console.log(chessString);

