

// storing the path of the image
let paperImagepath = "assert/paper.png";
let stoneImagePath ="assert/Stone.png";
let scessorImagePath = "assert/Sicssor.png";

let mainContainer = document.getElementById("mainContainer");
mainContainer.id="mainContainer"


// human annd computer count showing container
let countVisibilityDiv = document.createElement("div");
countVisibilityDiv.id ="countVisibilityDiv"

document.body.append(countVisibilityDiv);

   // Number of life count
let lifeTimeVisibleDiv = document.createElement("div");
document.body.append(lifeTimeVisibleDiv);


// reset button
let resetButton = document.createElement("button");
resetButton.id="resetButton";
resetButton.innerText="RESET";
lifeTimeVisibleDiv.appendChild(resetButton);

let lifeTimeCount = document.createElement("h2");
lifeTimeCount.id="lifeTimeCount";
lifeTimeCount.innerText=`CHANCE - ${10}`;
lifeTimeVisibleDiv.appendChild(lifeTimeCount);

    let humanCountOutputDiv = document.createElement("div");
    humanCountOutputDiv.className="humanComputerCountOutputDiv"
  
    countVisibilityDiv.appendChild(humanCountOutputDiv);
    let humanCountOutput = document.createElement("h2");
    humanCountOutput.textContent=0;
    humanCountOutputDiv.appendChild(humanCountOutput);

    let textWiningOutput = document.createElement("h2");
    textWiningOutput.textContent="START GAME";
    textWiningOutput.id = "textWinningOutput"
    countVisibilityDiv.appendChild(textWiningOutput);

    let computerCountOutputDiv = document.createElement("div");
    computerCountOutputDiv.className="humanComputerCountOutputDiv";
    
    countVisibilityDiv.appendChild(computerCountOutputDiv);
    let computerCountOutput = document.createElement("h2");
    computerCountOutput.textContent=0;
    computerCountOutputDiv.appendChild(computerCountOutput);


// start button when the site load
window.onload =()=>{
     let startGameButton= document.createElement("button");
     startGameButton.id ="startGame";
     startGameButton.textContent="START GAME";
     
     mainContainer.appendChild(startGameButton);

    // adding the addevent listner to remove the start button
    startGameButton.addEventListener("click",()=>{
        gameInterface(startGameButton);
    });
}

// button container div
let buttonDiv = document.createElement("div");
buttonDiv.id="buttonDiv";
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
   vsImage.id="versus";
   vsImage.src="assert/Versus.png"
   mainContainer.appendChild(vsImage);

    // computer output visibility div
    let computerVisiblityDiv = document.createElement("div");
    mainContainer.appendChild(computerVisiblityDiv);

    // countvisibility div



    // human player output image
    let humanButtonOutputImage = document.createElement("img");
    humanButtonOutputImage.className="humanAndComButtonOutputImage";
   humanVisiblityDiv.appendChild(humanButtonOutputImage);


    // computer output image
    let computorRandomOutputImage =document.createElement("img");
    computorRandomOutputImage.className="humanAndComButtonOutputImage";
    computerVisiblityDiv.appendChild(computorRandomOutputImage);


    // button div

    // buttonCreations
    let stoneButton = document.createElement("button");
    stoneButton.textContent="STONE";
    stoneButton.className="stonePaperScissorButton";
    stoneButton.id="stoneButtonId";

   
    let paperButton = document.createElement("button");
    paperButton.textContent="PAPER";
    paperButton.className="stonePaperScissorButton";
    paperButton.id="paperButtonId";
    
    
    let scessorButton = document.createElement("button");
    scessorButton.textContent="SCISSOR";
    scessorButton.className="stonePaperScissorButton";
    scessorButton.id="scissorButtonId";
   


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