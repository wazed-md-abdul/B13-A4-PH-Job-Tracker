
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
    if(id == 'accepted-filter-btn'){
        allCards.classList.add('hidden')
        sectionForAccepted.classList.remove('hidden')
    }
    
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
    decision.querySelector(".liveStatus").innerText= "Interviewed"
    decision.querySelector(".liveStatus").className = " btn btn-soft text-[green] border-green-600 "
   if (!jobExist)
   {
    acceptedList.push(cardInfo);
   }
   
    lengthCheck ();
   
    renderAccepted ()
   }
   
})

function renderAccepted ()
{
    sectionForAccepted.innerHTML = '';

    for( let accepted of acceptedList)
    {
        
        let div = document.createElement("div")
    div.className= "bg-white rounded-md p-9 space-y-4 shadow-md  transition-all duration-300 ease-in-out  hover:bg-blue-100 hover:-translate-y-1 hover:shadow-xl "
    div.innerHTML = `<div class="flex justify-between items-center space-y-4">
                    <div class="space-y-2">
                        <h1 id="companyName" class="text-[#002C5C] text-[15px] font-bold">Mobile First Corp</h1>
                        <p id="neededSkill" class="text-[grey]">React Native Developer</p>
                    </div>
                    <button class="cursor-pointer btn btn-error"><i class="fa-regular fa-trash-can"></i></button>
                </div>

                <p id="salaryData" class="text-[grey] text-sm"> Remote
                    •
                    Full-time
                    •
                    $130,000 - $175,000</p>
                <button class="btn btn-soft bg-[#EEF4FF] text-[#002C5C] border-none shadow-md"> Not Applied</button>
                <p id="jobAbout" class="text-[grey] text-sm">Build cross-platform mobile applications using React
                    Native. Work on
                    products used by millions of users worldwide.</p>
                <div class="space-x-2">
                    <button class="btn btn-soft text-[green] border-green-600 bg-white">Interview</button>
                    <button class="btn btn-soft text-[red] bg-white border-red-600">Rejected</button>
                </div>

    ` 
        sectionForAccepted.append(div);
    
    }
}


