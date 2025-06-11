
document.body.style.height="100vh";
document.body.style.width="100%";
document.body.style.display = "flex";
document.body.style.flexDirection="column";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";
document.body.style.justifyContent="space-evenly";

// storing the path of the image
let paperImagepath = "assert/paper.png";
let stoneImagePath ="assert/Stone.png";
let scessorImagePath = "assert/Sicssor.png";

let mainContainer = document.getElementById("mainContainer");
mainContainer.style.height="300px"
mainContainer.style.width="800px";
mainContainer.style.display="flex";
mainContainer.style.flexDirection="row";
mainContainer.style.justifyContent="center"
mainContainer.style.alignItems="center";
mainContainer.style.justifyContent="space-evenly";
mainContainer.style.backgroundColor="ivory";
mainContainer.style.borderRadius ="40px";
mainContainer.style.border = "10px solid lightgray";

// human annd computer count showing container
let countVisibilityDiv = document.createElement("div");
countVisibilityDiv.style.display="flex";
countVisibilityDiv.style.height="80px";
countVisibilityDiv.style.width="450px";
countVisibilityDiv.style.backgroundColor="lightgrey";
countVisibilityDiv.style.justifyContent="space-evenly";
countVisibilityDiv.style.borderRadius="20px";
document.body.append(countVisibilityDiv);

   // Number of life count
let lifeTimeVisibleDiv = document.createElement("div");
document.body.append(lifeTimeVisibleDiv);


// reset button
let resetButton = document.createElement("button");
resetButton.innerText="RESET";
resetButton.style.height = "50px";
resetButton.style.width="200px";
resetButton.style.border="4px solid grey";
resetButton.style.backgroundColor="yellow";
resetButton.style.fontWeight="bold";
resetButton.style.color="white";
resetButton.style.borderRadius="40px";
resetButton.style.fontSize="20px";
resetButton.style.backgroundColor="lightgrey";
resetButton.style.display = "none";
lifeTimeVisibleDiv.appendChild(resetButton);

let lifeTimeCount = document.createElement("h2");
lifeTimeCount.innerText=`CHANCE - ${10}`;
lifeTimeVisibleDiv.appendChild(lifeTimeCount);

    let humanCountOutputDiv = document.createElement("div");
    humanCountOutputDiv.style.backgroundColor="white";
    humanCountOutputDiv.style.height="60px";
    humanCountOutputDiv.style.width="60px";
    humanCountOutputDiv.style.marginTop="0.6rem";
    humanCountOutputDiv.style.display="flex";
    humanCountOutputDiv.style.justifyContent="center";
    humanCountOutputDiv.style.alignItems="center";
    humanCountOutputDiv.style.borderRadius="15px";

    countVisibilityDiv.appendChild(humanCountOutputDiv);
    let humanCountOutput = document.createElement("h2");
    humanCountOutput.textContent=0;
    humanCountOutputDiv.appendChild(humanCountOutput);

    let textWiningOutput = document.createElement("h2");
    textWiningOutput.textContent="START GAME";
    countVisibilityDiv.appendChild(textWiningOutput);

    let computerCountOutputDiv = document.createElement("div");
    computerCountOutputDiv.style.backgroundColor="white";
    computerCountOutputDiv.style.height="60px";
    computerCountOutputDiv.style.width="60px";
    computerCountOutputDiv.style.marginTop="0.6rem";
    computerCountOutputDiv.style.display="flex";
    computerCountOutputDiv.style.justifyContent="center";
    computerCountOutputDiv.style.alignItems="center";
    computerCountOutputDiv.style.borderRadius="15px";

    countVisibilityDiv.appendChild(computerCountOutputDiv);
    let computerCountOutput = document.createElement("h2");
    computerCountOutput.textContent=0;
    computerCountOutputDiv.appendChild(computerCountOutput);


// start button when the site load
window.onload =()=>{
     let startGameButton= document.createElement("button");
     startGameButton.textContent="START GAME";
     startGameButton.style.width = "230px";
     startGameButton.style.height= "50px";
     startGameButton.style.borderRadius ="40px";
     startGameButton.style.fontWeight="bold";
     startGameButton.style.backgroundColor="mistyrose";
     startGameButton.style.border = "4px solid lightgray"
     
     mainContainer.appendChild(startGameButton);

    // adding the addevent listner to remove the start button
    startGameButton.addEventListener("click",()=>{
        gameInterface(startGameButton);
    });
}

// button container div
let buttonDiv = document.createElement("div");
buttonDiv.style.width="620px";
buttonDiv.style.height="auto";
buttonDiv.style.display="flex";
buttonDiv.style.justifyContent="center";
buttonDiv.style.alignItems="center";
buttonDiv.style.justifyContent="space-evenly";
document.body.append(buttonDiv);
// human playing functions

function gameInterface(removeStartButton){
    removeStartButton.remove();

    let stoneImage = "StoneImage";
    let paperImage = "PaperImage";
    let scessorImage = "SeccorImage"; 
  
    // player human output visibility div
    let humanVisiblityDiv = document.createElement("div");
    mainContainer.appendChild(humanVisiblityDiv);

    //    vs image
   let vsImage = document.createElement("img");
   vsImage.src="assert/Versus.png"
   vsImage.style.height="100px";
   vsImage.style.width="100px"; 
   mainContainer.appendChild(vsImage);

    // computer output visibility div
    let computerVisiblityDiv = document.createElement("div");
    mainContainer.appendChild(computerVisiblityDiv);

    // countvisibility div



    // human player output image
    let humanButtonOutputImage = document.createElement("img");
    humanButtonOutputImage.style.height = "200px";
    humanButtonOutputImage.style.width= "200px";
    humanButtonOutputImage.style.borderRadius ="40px";
   humanVisiblityDiv.appendChild(humanButtonOutputImage);


    // computer output image
    let computorRandomOutputImage =document.createElement("img");
    computorRandomOutputImage.style.height = "200px";
    computorRandomOutputImage.style.width= "200px";
    computorRandomOutputImage.style.borderRadius="40px";
    computerVisiblityDiv.appendChild(computorRandomOutputImage);


    // button div

    // buttonCreations
    let stoneButton = document.createElement("button");
    stoneButton.textContent="STONE";
    stoneButton.style.width = "160px";
    stoneButton.style.height="50px";
    stoneButton.style.backgroundColor="orange";
    stoneButton.style.border ="none";
    stoneButton.style.borderRadius="20px";
    stoneButton.style.color="white";
    stoneButton.style.fontWeight="bold";
    stoneButton.style.backgroundColor="mediumturquoise";
    stoneButton.style.border = "3px solid dodgerblue";
    
    let paperButton = document.createElement("button");
    paperButton.textContent="PAPER";
    paperButton.style.width = "160px";
    paperButton.style.height="50px";
    paperButton.style.backgroundColor="orange";
    paperButton.style.border ="none";
    paperButton.style.borderRadius="20px";
    paperButton.style.color="white";
    paperButton.style.fontWeight="bold";
    paperButton.style.backgroundColor="mediumspringgreen";
    paperButton.style.border = "3px solid dodgerblue";
    
    let scessorButton = document.createElement("button");
    scessorButton.textContent="SECESSOR";
    scessorButton.style.width = "160px";
    scessorButton.style.height="50px";
    scessorButton.style.backgroundColor="orange";
    scessorButton.style.border ="none";
    scessorButton.style.borderRadius="20px";
    scessorButton.style.color="white";
    scessorButton.style.fontWeight="bold";
    scessorButton.style.backgroundColor="mediumorchild";
    scessorButton.style.border = "3px solid dodgerblue";


    // image showing for whent the specfic button clicked
    let outputOfHuman;
    stoneButton.addEventListener("click",()=>{
        humanButtonOutputImage.alt=stoneImage;
        humanButtonOutputImage.src=stoneImagePath;
        
        
         humanVisiblityDiv.append(humanButtonOutputImage);
         outputOfHuman = stoneImage;
         
            computerMove(stoneImage,paperImage,scessorImage,computorRandomOutputImage,computerVisiblityDiv,outputOfHuman)
         
        });
        
        paperButton.addEventListener("click",()=>{
            humanButtonOutputImage.alt=paperImage;
            humanButtonOutputImage.src=paperImagepath;
            humanVisiblityDiv.append(humanButtonOutputImage);
            outputOfHuman=paperImage;
            computerMove(stoneImage,paperImage,scessorImage,computorRandomOutputImage,computerVisiblityDiv,outputOfHuman);
        });
        
        scessorButton.addEventListener("click",()=>{
            humanButtonOutputImage.alt=scessorImage;
            humanButtonOutputImage.src=scessorImagePath;
            humanVisiblityDiv.append(humanButtonOutputImage);
            outputOfHuman=scessorImage;
            computerMove(stoneImage,paperImage,scessorImage,computorRandomOutputImage,computerVisiblityDiv,outputOfHuman);
    });
    

    buttonDiv.appendChild(stoneButton);
    buttonDiv.appendChild(paperButton);
    buttonDiv.appendChild(scessorButton);

    
}

// computer moves randomly
function computerMove(stoneImage,paperImage,scessorImage,computorRandomOutputImage,computerVisiblityDiv,outputOfHuman){
    
    setTimeout(()=>{
    // storing the image url in the array
    let urlArray = [stoneImagePath,paperImagepath,scessorImagePath];
    let labelArray = [stoneImage,paperImage,scessorImage];
    let randomIndex = Math.floor(Math.random()*3);
    
    // set the source of the image of the computer move

    computorRandomOutputImage.src=urlArray[randomIndex];
    let outputOfComputer=labelArray[randomIndex];
    result(outputOfHuman,outputOfComputer);
    
    },600);
}

// logic of the game
    let playingLimit = 10;
    let humanCount=0;
    let computerCount=0;
function result(outputOfHuman,outputOfComputer){
    
    switch(outputOfHuman){
        case "StoneImage" :
            playingLimit-=1;
            if(outputOfHuman==outputOfComputer){
                textWiningOutput.textContent=" DRAW";
                
            }else if(outputOfComputer=="SeccorImage"){
                humanCount+=1;
                textWiningOutput.textContent="Human 1";
            }
            else if(outputOfComputer=="PaperImage"){
                 computerCount+=1;
                 textWiningOutput.textContent="Computer 1";
            }

        humanCountOutput.textContent=humanCount;
           
        computerCountOutput.textContent=computerCount;
        
        break;
        case "PaperImage" :
            playingLimit-=1;
            if(outputOfHuman==outputOfComputer){
                textWiningOutput.textContent="DRAW";
            }
            else if(outputOfComputer=="StoneImage"){
                humanCount+=1;
                textWiningOutput.textContent="Human 1";
            }
            else if(outputOfComputer=="SeccorImage"){
                computerCount+=1;
                textWiningOutput.textContent="Computer 1";
            }
            
            humanCountOutput.textContent=humanCount;
            computerCountOutput.textContent=computerCount;
            
            
            break;
            case "SeccorImage":
                playingLimit-=1;
                if(outputOfHuman==outputOfComputer){
                    textWiningOutput.textContent="Draw";
                }
                else if(outputOfComputer=="PaperImage"){
                    humanCount+=1;
                    textWiningOutput.textContent=" Human 1";
                }
                else if(outputOfComputer=="StoneImage"){
                    computerCount+=1
                    textWiningOutput.textContent="Computer 1";
                }
                
                humanCountOutput.textContent=humanCount;
                
                computerCountOutput.textContent=computerCount;
                break;
            }
            lifeTimeCount.innerText=`CHANCE - ${playingLimit}`;

// checking who is winner and reseting the options
 if(playingLimit==0){
   
    lifeTimeCount.style.display = "none";
    resetButton.style.display="block";
    mainContainer.style.display="none";
    
    resetButton.addEventListener("click",()=>{
         lifeTimeCount.innerText=`CHANCE - ${10}`;
         lifeTimeCount.style.display = "block";
         resetButton.style.display="none";
         playingLimit=10;
         humanCount=0;
         computerCount=0;
         humanCountOutput.textContent=0;
         computerCountOutput.textContent=0;
         textWiningOutput.textContent="START GAME";
         buttonDiv.style.display="flex";
         mainContainer.style.display="flex";
         

    });
        if(computerCount<humanCount){
            textWiningOutput.textContent="HUMAN WINS!";
            buttonDiv.style.display="none";
           
            
        }else if(humanCount<computerCount){
            textWiningOutput.textContent="COMPUTER WINS!";
            buttonDiv.style.display="none";
          
           
        }else{
            textWiningOutput.textContent="MATCH DRAW";
            buttonDiv.style.display="none";
         
        }
    }
}