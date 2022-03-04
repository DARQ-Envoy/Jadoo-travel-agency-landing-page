const firstP=document.querySelector("#first-person");
const secondP=document.querySelector("#second-person");
const thirdP=document.querySelector("#third-person");
const fir=document.querySelector(".fir");
const sec=document.querySelector(".sec");
const thr=document.querySelector(".thr");


firstP.classList.add("app")
secondP.classList.add("mid")
thirdP.classList.add("disp")
let item=-1;
let itemChange=0;
let itemMid=1;
let upClicked=false;

const upIcon=document.querySelector(".up-icon");
const  downIcon=document.querySelector(".down-icon");

const styleArray=[firstP,secondP,thirdP];
upIcon.addEventListener("click",moveComment);

function moveComment(){
    removeComment();
}

 function removeComment(){
     item+=1;
     itemChange+=1;
     itemMid+=1;
     insertComment();
     console.log("itemmid-",itemMid);
     console.log("itemChange",itemChange);
     console.log("item",item);
     SettingBg()
      styleArray[item].classList.add("disp");
      styleArray[itemChange].classList.add("app");
      styleArray[itemMid].classList.add("mid"); 

}

function insertComment(){
    console.log(item,itemChange,itemMid)
    console.log("running")
    console.log(firstP)

    firstP.className="";
    secondP.className="";
    thirdP.className="";
            if(item>2){
                item=0
            }
    if(itemMid>2){
        itemMid=0;
    }
    if(itemChange>2){
        itemChange=0
    }
}

downIcon.addEventListener("click",unMove)

function unMove(){
    if(!upClicked){
        reset()
    }
 
    if(upClicked){
        crossCheck()
        console.log("hey")
        item-=1;
        itemChange-=1;
        itemMid-=1;
    }
    check()
    styleArray[item].classList.add("app");
    console.log(styleArray[item])
    styleArray[itemChange].classList.add("mid");
    console.log(styleArray[itemChange])
    styleArray[itemMid].classList.add("disp"); 
    console.log(styleArray[itemMid])
}
function check(){
    SettingBg()
console.log(item,itemChange,itemMid)
    upClicked=true;
    styleArray[item].className="";
    styleArray[itemChange].className="";
    styleArray[itemMid].className="";
    console.log(upClicked)
}

function crossCheck(){
    console.log("hey")
    console.log(itemChange)
    console.log(-1)
    if(item === 0){
    console.log("item");
        item=3};
    if(itemChange === 0){
        console.log("itemChange")
        itemChange=3}
    if(itemMid === 0){
        console.log("ItemMid")
        itemMid=3}

}
function reset(){
    console.log("reset")
    if(item===-1){
        item=2
    }
    if(itemChange===0){
        itemChange=1
    }
    if(itemMid===1){
        itemMid=0
    }
   
}
function SettingBg(){
if(item===2){
thr.setAttribute("id","blue");
fir.removeAttribute('id');
sec.removeAttribute('id');
}
else if(item===1){
    fir.removeAttribute('id');
    thr.removeAttribute('id');
    sec.setAttribute("id","blue");
}
else if(item===0){
    thr.removeAttribute('id');
    sec.removeAttribute('id')
    fir.setAttribute("id","blue")
}
}