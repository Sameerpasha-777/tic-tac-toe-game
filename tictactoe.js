const statusDiv=document.querySelector('.status');
const reset=document.querySelector('.reset');
const celldivs=document.querySelectorAll('.gamecell');

const symbolx='X';
const symbolo='O';

//game variables
let gameislive=true;
let xIsNext=true;

//function
const letterToSymbol =(Letter)=> Letter==='X' ? symbolx : symbolo;

const handlewin = (Letter) =>{
    gameislive = false;
    if(Letter ==='X'){
        statusDiv.innerHTML =`${letterToSymbol(Letter)} has won`;
    } else{
        statusDiv.innerHTML =`<span>${letterToSymbol(Letter)} has won!</span>`;
    }
};

const checkGamestatus=()=>{
    const topleft = celldivs[0].classList[1];
    const topmiddle = celldivs[1].classList[1];
    const topright = celldivs[2].classList[1];
    const middleleft = celldivs[3].classList[1];
    const middlemiddle = celldivs[4].classList[1];
    const middleright = celldivs[5].classList[1];
    const bottomleft = celldivs[6].classList[1];
    const bottommiddle = celldivs[7].classList[1];
    const bottomright = celldivs[8].classList[1];


//check winner 
if(topleft && topleft === topmiddle && topleft ===topright){
    handlewin(topleft);
    celldivs[0].classList.add('won');
    celldivs[1].classList.add('won');
    celldivs[2].classList.add('won');
}else if(middleleft && middleleft === middlemiddle && middleleft === middleright){
    handlewin(middleleft);
    celldivs[3].classList.add('won');
    celldivs[4].classList.add('won');
    celldivs[5].classList.add('won');
}else if(bottomleft && bottomleft ===bottommiddle && bottomleft === bottomright){
    handlewin(bottomleft);
    celldivs[6].classList.add('won'); 
    celldivs[7].classList.add('won');
    celldivs[8].classList.add('won');
} else if(topleft && topleft ===middleleft && topleft === bottomleft){
    handlewin(topleft);
    celldivs[0].classList.add('won');
    celldivs[3].classList.add('won');
    celldivs[6].classList.add('won');
} else if(topmiddle && topmiddle === middlemiddle && topmiddle === bottommiddle){
    handlewin(topmiddle)
    celldivs[1].classList.add('won');
    celldivs[4].classList.add('won');
    celldivs[7].classList.add('won');
} else if (topright && topright === middleright && topright === bottomright){
    handlewin(topright);
    celldivs[2].classList.add('won');
    celldivs[5].classList.add('won');
    celldivs[8].classList.add('won');
} else if (topleft && topleft === middlemiddle && topleft ===bottomright){
    handlewin(topleft);
    celldivs[0].classList.add('won');
    celldivs[4].classList.add('won');
    celldivs[8].classList.add('won');
} else if (topright && topright === middlemiddle && topright ===bottomleft){
    handlewin(topright);
    celldivs[2].classList.add('won');
    celldivs[4].classList.add('won');
    celldivs[6].classList.add('won');
} else if (topleft && topmiddle && topright && middleleft && middlemiddle && middleright && bottomleft && bottommiddle && bottomright){
    gameislive =false;
    statusDiv.innerHTML = 'game is tied';  
} else {
    xIsNext = !xIsNext;
    if(xIsNext){
        statusDiv.innerHTML =`${symbolx} is next`;
    } else {
        statusDiv.innerHTML = `<span>${symbolo} is next</span>`
    }
}
};

const handlereset = (e) =>{
    xIsNext =true;
    statusDiv.innerHTML =`${symbolx} is next`;
    for(const celldiv of celldivs){
        celldiv.classList.remove('X');
        celldiv.classList.remove('O');
        celldiv.classList.remove('WON');

    }
gameislive = true;
};

const handlecellclick = (e) => {
    const classList = e.target.classList;
    //when neither x nor o is added the classList has only one element.
    //so classList [1] is undefined.
    if(!gameislive || classList[1] === 'X' || classList[1] ==='O'){
        return;
    } 
if(xIsNext){
    classList.add('X');
    checkGamestatus();
}
else{
    classList.add('O');
    checkGamestatus();
}
};

reset.addEventListener('click',handlereset);

for (const celldiv of celldivs){
    celldiv.addEventListener('click',handlecellclick);
};

  