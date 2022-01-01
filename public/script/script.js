// window.scrollBy(0,1250);

// document.body.addEventListener("click",e=>{
//     window.scrollBy(1250,1150);
// });

const ele = document.getElementById("upper-left").getClientRects();
console.log(ele);

const upperLeft = () => {
    // window.scrollBy(1366,636);
    window.scrollTo(0,0);
}

const upperMid = () => {
    // window.scrollTo(1366,0);
    window.scrollTo(window.innerWidth,0);
}

const upperRight = () => {
    // window.scrollTo(2732,0);
    window.scrollTo(2*window.innerWidth,0);
}

const midLeft = () => {
    // window.scrollTo(0,636);
    window.scrollTo(0,window.innerHeight);
}

const Center = () => {
    // window.scrollTo(1366,636);
    window.scrollTo(window.innerWidth,window.innerHeight);
}

const midRight = () => {
    // window.scrollTo(2732,636);
    window.scrollTo(2*window.innerWidth,window.innerHeight);
}

const lowerLeft = () => {
    // window.scrollTo(0,1272);
    window.scrollTo(0,2*window.innerHeight);
}

const lowerMid = () => {
    // window.scrollTo(1366,1272);
    window.scrollTo(window.innerWidth,2*window.innerHeight);
}

const lowerRight = () => {
    window.scrollTo(2*window.innerWidth,2*window.innerHeight);
}

document.getElementById("menu").addEventListener("click",e=>{
    if(document.getElementById("btns").style.display === "grid"){
        document.getElementById("btns").style.display = "none";
    }else{
        document.getElementById("btns").style.display = "grid";
        document.getElementById("btns").style.gridTemplateColumns = "1fr 1fr 1fr";
        document.getElementById("btns").style.gridTemplateRows = "1fr 1fr 1fr";
        document.getElementById("btns").style.justifyItems = "center";
        document.getElementById("btns").style.alignContent = "center";
    }
    
});