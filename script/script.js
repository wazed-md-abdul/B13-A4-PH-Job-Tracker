let rejectedList = [];
let acceptedList = [];

function getId (id){
    const idGotten = document.getElementById(id);
    return idGotten;
}

let totalCounts = getId("totalJobs");
let totalCountsInSpan = getId("totalInSpan")
let totalIntAcp = getId("interviewJobs");
let totalIntRej = getId("rejectedJobs");
let allCards = getId("cardsDiv");

const mainContainer =getId("main");



totalCounts.innerText = allCards.children.length;
totalCountsInSpan.innerText=allCards.children.length;

totalIntAcp.innerText = acceptedList.length; 
totalIntRej.innerText = rejectedList.length;

const allBtn = getId("all-filter-btn");
const acceptedBtn = getId("accepted-filter-btn");
const rejectedBtn = getId("rejected-filter-btn");

function toggleStyle (id){

    allBtn.classList.remove('btn', 'btn-info');    
    acceptedBtn.classList.remove('btn', 'btn-info');
    rejectedBtn.classList.remove('btn', 'btn-info');
    
     allBtn.classList.add('btn', 'btn-soft');    
    acceptedBtn.classList.add('btn', 'btn-soft');
    rejectedBtn.classList.add('btn', 'btn-soft');
    
    const selected = document.getElementById(id) ;
    selected.classList.remove('btn','btn-soft');
    selected.classList.add('btn','btn-info');
    
}