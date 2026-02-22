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

function  lengthCheck ()
{


totalIntAcp.innerText = acceptedList.length; 
totalIntRej.innerText = rejectedList.length;
return;
}

const allBtn = getId("all-filter-btn");
const acceptedBtn = getId("accepted-filter-btn");
const rejectedBtn = getId("rejected-filter-btn");
const sectionForAccepted =getId("sectionForAccepted");
const sectionForRejected = getId("sectionForRejected");

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
 
mainContainer.addEventListener ('click', function (event){
    
   if(event.target.classList.contains("border-green-600"))
    {
     const decision = event.target.parentNode.parentNode;
    const  companyName = decision.querySelector('#companyName').innerText;
    const neededSkill = decision.querySelector("#neededSkill").innerText;
    const salaryData = decision.querySelector("#salaryData").innerText;
    const jobAbout = decision.querySelector ("#jobAbout").innerText;

    const cardInfo = { companyName,
                        neededSkill,
                        salaryData,
                        jobAbout
    }    
   const jobExist = acceptedList.find(item=> item.companyName == cardInfo.companyName)
   if (!jobExist)
   {
    acceptedList.push(cardInfo);
   }
   
   lengthCheck ();
   
   }
   
})

function renderAccepted ()
{
    sectionForAccepted.innerHTML = '';
}


