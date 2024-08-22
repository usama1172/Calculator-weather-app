let show = document.getElementById("display")

function clicked(input){
    show.innerText += input
}



function clearDisp(){
   show.innerText = "";
}


function calculation(){
   let result = eval(show.innerText)
   show.innerText = result
}




function rem(){
   let result = show.innerText.slice(0,show.innerText.length -1)
   show.innerText = result
}




