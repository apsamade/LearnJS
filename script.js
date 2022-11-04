document.getElementById('buttonLv1').addEventListener('click', function(){
    
    let mInp = document.getElementById('inputLv1').value;
    let mLi = document.createElement('li');
    
    console.log(mInp);
    console.log(mLi);
    
    document.getElementById('ulLv1').prepend(mLi);
    mLi.textContent = mInp;

})


let ico1 = document.getElementById('icone1');
ico1.addEventListener('click', changeIcone);

function changeIcone(){
    
    if(ico1.textContent == '🙉'){
        ico1.textContent = '🙈';
    }else if(ico1.textContent == '🙈'){
        ico1.textContent = '🙊';
    }else{
        ico1.textContent = '🙉';
    }
}


async function fetchPoke(){
    const res = await  fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    if(res.ok === true){
        return res.json();
    }
    throw new Error('Impossible de charger les dossiers zebi')
}
fetchPoke().then(pokemon => mesPoke(pokemon.results))

function mesPoke(pokemon){
    
    for(elem of pokemon){

        const mLi = document.createElement('li');
        document.getElementById('chosePokemon').append(mLi);
        mLi.textContent = elem.name;
        mLi.style.textAlign = 'left';
        mLi.style.lineHeight = '175%'
    }
}

document.getElementById('buttonLv4').addEventListener('click', function(){
    
    let mInp2 = document.getElementById('inputLv4').value;
    let mLi3 = document.createElement('li');
    
    console.log(mInp2);
    console.log(mLi3);
    
    document.getElementById('mlist').prepend(mLi3);
    mLi3.textContent = mInp2 
    fDel = delete(mInp2.textContent);
    console.log(fDel)

    let mSp = document.createElement('span');
    let mCroix = document.createTextNode('\u00d7');
    console.log(mCroix)
    mSp.appendChild(mCroix)
    mSp.className = "croix";
    mLi3.className = "molly"
    mLi3.appendChild(mSp);

    mSp.addEventListener('click', function(){
        mLi3.style.display = 'none'
    })
})
document.querySelector('.molly').addEventListener('click', function(){
    
})

