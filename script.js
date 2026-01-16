console.log("Space Launch Dash running");

const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);

let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;

// Query Selectors
const apolloBtn   = document.querySelector("#apollo-btn"); 
const nebulaBtn   = document.querySelector("#nebula-btn"); 
const cometBtn    = document.querySelector("#comet-btn"); 

const apolloRocket = document.querySelector("#apollo-rocket"); 
const nebulaRocket = document.querySelector("#nebula-rocket"); 
const cometRocket  = document.querySelector("#comet-rocket"); 

const winnerBox = document.querySelector("#winner"); 

// Click Handlers
const boostApollo = () => { 
    apollo_spot += 1; 
    if (apollo_spot < 6); 
    moveTo(apolloRocket, apollo_spot); 
    checkWinner(apollo_spot, "Apollo"); 
    apolloRocket.alt = `apollo rocket at spot ${apollo_spot} out of 6`; 
  
};

const boostNebula = () => {
     nebula_spot += 1; 
    if(nebula_spot < 6); 
    moveTo(nebulaRocket, nebula_spot); 
    checkWinner(apollo_spot, "Nebula"); 
    nebulaRocket.alt = `nebula rocket at spot ${nebula_spot} out of 6`; 
};

const boostComet = () => {
     comet_spot += 1; 
     if  (comet_spot < 6);
    moveTo(cometRocket, comet_spot); 
    checkWinner(apollo_spot, "Comet"); 
    cometRocket.alt = `comet rocket at spot ${comet_spot} out of 6`; 

};

// Winner Check
const checkWinner = (spot, item) => {
    if(spot === 6) {
        winnerBox.innerHTML = `${item} is the winner!`; 
    }
}; 

// Events
apolloBtn.addEventListener("click", boostApollo); 
nebulaBtn.addEventListener("click", boostNebula); 
cometBtn.addEventListener("click", boostComet); 
