//객체......  Object
//고래
//객체에는 객체만이 가지는 특징  properties
//객체가 할 수 있는 행동들이 있는데 이걸 methods
//인스턴스
/*
let myWhale = new Whale();
myWhale.swimming();
myWhale.breath();
myWhale.fly();
myWhale.width = 20;
*/
//+,-,*,/,%
let comSel = 0;
let humanSel = 0;
let comItem = $("#computer li");
let humanItem = $("#human li");
let result = $("#result ul");
let cover = $(".cover");
let totalResult = $(".cover .totalResult");
let btnRestart = $(".cover .btnRestart");
let isEnd = true;
let gameNum = 0;
let gameTotal = 3;

let winNum = 0;
let loseNum = 0;
let drawNum = 0;

//버튼을 세번만 누를 수 있게...

let win = `<li class="win">W</li>`;
let lose = `<li class="lose">L</li>`;
let draw = `<li class="draw">D</li>`;

//let fly = $("#fly");


//함수 선언   function declation
let randomChoice = function(){
    comSel = Math.floor( Math.random()*3 );  //0 <= Math.random()*3 <= 3
    //console.log("setInterval -> num", comSel);
    comItem.hide();
    comItem.eq(comSel).show();
}
//     setInterval(함수,시간);
//맞춰보세요.............

let stopGame;
let stopComputer = setInterval(randomChoice,10);

btnRestart.on("click",function(){
    cover.hide();
    stopComputer = setInterval(randomChoice,10);
    isEnd=true;
    gameNum = 0;

    winNum = 0;
    loseNum = 0;
    drawNum = 0;
    
    result.html("");
});
humanItem.on("click",function(){
    if(isEnd){
        if(gameNum<gameTotal) {
            isEnd = false;
            gameNum++;
            humanSel = $(this).index();
            clearInterval(stopComputer);
            
            if(humanSel===comSel) {
                result.append(draw);
                //console.log("비겼음");
                drawNum++;
            } else if ((humanSel===0 &&  comSel===2)  || (humanSel===1 &&  comSel===0 ) || (humanSel===2 &&  comSel===1 )){
                //console.log("이겼음");
                result.append(win);
                winNum++;
            } else {
                //console.log("졌음");
                result.append(lose);
                loseNum++;
            }
            // w w w
            // w w L
            // W D W
            // D D W

            // L L L
            // D D L
            // w L L
            // L D L
            
            // D D D
            // W D L

            if(gameNum===gameTotal){
                clearTimeout(stopGame);
                setTimeout(function(){cover.show()},500);
                if(drawNum ===3 || winNum===1 && drawNum===1 && loseNum===1) {
                    totalResult.text("비겼어요 --;");
                } else if(winNum >= 2 || winNum===1 && drawNum===2) {
                    totalResult.text("이겼어요 ^^");
                } else {
                    totalResult.text("졌어요 ㅠㅠ");
                }
            } else {
                stopGame = setTimeout( function(){
                    isEnd = true;
                    stopComputer = setInterval(randomChoice,10);
                },1000);
            }
        }
    }
    
    /*
    if(  (humanSel===0 &&  comSel===2)  || (humanSel===1 &&  comSel===0 ) || (humanSel===2 &&  comSel===1 ) ){
        console.log("이겼음");
    } else if( (humanSel===0 &&  comSel===0) || (humanSel===1 &&  comSel===1 ) || (humanSel===2 &&  comSel===2 ) ){
        console.log("비겼음");
    } else if( (humanSel===0 &&  comSel===1 ) || (humanSel===1 &&  comSel===2 ) || (humanSel===2 &&  comSel===0 ) ) {
        console.log("졌음");
    }
    */
    /*
    if(humanSel===0 &&  comSel===2 ){
        console.log("이겼음");
    }
    if(humanSel===1 &&  comSel===0 ){
        console.log("이겼음");
    }
    if(humanSel===2 &&  comSel===1 ){
        console.log("이겼음");
    }

    if(humanSel===0 &&  comSel===0 ){
        console.log("비겼음");
    }
    if(humanSel===1 &&  comSel===1 ){
        console.log("비겼음");
    }
    if(humanSel===2 &&  comSel===2 ){
        console.log("비겼음");
    }

    if(humanSel===0 &&  comSel===1 ){
        console.log("졌음");
    }
    if(humanSel===1 &&  comSel===2 ){
        console.log("졌음");
    }
    if(humanSel===2 &&  comSel===0 ){
        console.log("졌음");
    }
    */
    /*
    내가 0이고 com==2; 거나
    내가 1이고 com==0; 거나
    내가 2이고 com==1; 거나


    내가 0이고 com==0
    내가 1이고 com==1
    내가 2이고 com==2

    내가 0이고 com==1
    내가 1이고 com==2
    내가 2이고 com==0
    */

    

    //이겼는지 졌는지 비겼는지.....
});




// $(window).on("click",function(){
//     num = num + 1;
//     comItem.hide();
//     comItem.eq(num%3).show();
// });

let flyX = 0;
let flyY = 0;
setInterval(function(){
    //100 ~ 1820
    //50 ~ 900
    flyX = Math.floor(Math.random()*1720+100);
    flyY = Math.floor(Math.random()*850+50);
    //Math.round()  /  floor()   / ceil()
    //fly.css({left:flyX,top:flyY});
},500);

