let rejectedList = [];
let acceptedList = [];

function getId(id) {
    return document.getElementById(id);
}

let totalCounts = getId("totalJobs");
let totalCountsInSpan = getId("totalInSpan");
let totalIntAcp = getId("interviewJobs");
let totalIntRej = getId("rejectedJobs");
let allCards = getId("cardsDiv");
let mainContainer = getId("main");

totalCounts.innerText = allCards.children.length;
totalCountsInSpan.innerText = allCards.children.length;

function lengthCheck() {
    totalIntAcp.innerText = acceptedList.length;
    totalIntRej.innerText = rejectedList.length;
}

const allBtn = getId("all-filter-btn");
const acceptedBtn = getId("accepted-filter-btn");
const rejectedBtn = getId("rejected-filter-btn");
const sectionForAccepted = getId("sectionForAccepted");
const sectionForRejected = getId("sectionForRejected");

function toggleStyle(id) {

    [allBtn, acceptedBtn, rejectedBtn].forEach(btn => {
        btn.classList.remove('btn-info');
        btn.classList.add('btn-soft');
    });

    const selected = getId(id);
    selected.classList.remove('btn-soft');
    selected.classList.add('btn-info');

    if (id === "accepted-filter-btn") {
        allCards.classList.add("hidden");
        sectionForAccepted.classList.remove("hidden");
        sectionForRejected.classList.add("hidden");
    }
    else if (id === "rejected-filter-btn") {
        allCards.classList.add("hidden");
        sectionForRejected.classList.remove("hidden");
        sectionForAccepted.classList.add("hidden");
    }
    else {
        allCards.classList.remove("hidden");
        sectionForAccepted.classList.add("hidden");
        sectionForRejected.classList.add("hidden");
    }
}

mainContainer.addEventListener("click", function (event) {

    const card = event.target.closest(".job-card");
    if (!card) return;

    const companyName = card.querySelector(".companyName").innerText;
    const neededSkill = card.querySelector(".neededSkill").innerText;
    const salaryData = card.querySelector(".salaryData").innerText;
    const jobAbout = card.querySelector(".jobAbout").innerText;

    const cardInfo = { companyName, neededSkill, salaryData, jobAbout };

    if (event.target.classList.contains("border-green-600")) {

        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        const exists = acceptedList.find(item => item.companyName === companyName);
        if (!exists) acceptedList.push(cardInfo);

        const statusBtn = card.querySelector(".liveStatus");
        statusBtn.innerText = "Interviewed";
        statusBtn.className = "liveStatus btn btn-soft text-[green] border-green-600";

        lengthCheck();
        renderAccepted();
        renderRejected();
    }

    if (event.target.classList.contains("border-red-600")) {

        acceptedList = acceptedList.filter(item => item.companyName !== companyName);

        const exists = rejectedList.find(item => item.companyName === companyName);
        if (!exists) rejectedList.push(cardInfo);

        const statusBtn = card.querySelector(".liveStatus");
        statusBtn.innerText = "Rejected";
        statusBtn.className = "liveStatus btn btn-soft text-[red] border-red-600";

        lengthCheck();
        renderAccepted();
        renderRejected();
    }
});

function renderAccepted() {

    sectionForAccepted.innerHTML = "";

    acceptedList.forEach(accepted => {

        const div = document.createElement("div");
        div.className = "job-card bg-white rounded-md p-9 space-y-4 shadow-md";

        div.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="companyName text-[#002C5C] font-bold">${accepted.companyName}</h1>
                    <p class="neededSkill text-gray-500">${accepted.neededSkill}</p>
                </div>
            </div>

            <p class="salaryData text-gray-500 text-sm">${accepted.salaryData}</p>
            <button class="liveStatus btn btn-soft text-[green] border-green-600">
                Interviewed
            </button>
            <p class="jobAbout text-gray-500 text-sm">${accepted.jobAbout}</p>

            <div class="space-x-2">
                <button class="btn btn-soft text-[green] border-green-600">Interview</button>
                <button class="btn btn-soft text-[red] border-red-600">Rejected</button>
            </div>
        `;

        sectionForAccepted.append(div);
    });
}

function renderRejected() {

    sectionForRejected.innerHTML = "";

    rejectedList.forEach(rejected => {

        const div = document.createElement("div");
        div.className = "job-card bg-white rounded-md p-9 space-y-4 shadow-md";

        div.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="companyName text-[#002C5C] font-bold">${rejected.companyName}</h1>
                    <p class="neededSkill text-gray-500">${rejected.neededSkill}</p>
                </div>
            </div>

            <p class="salaryData text-gray-500 text-sm">${rejected.salaryData}</p>
            <button class="liveStatus btn btn-soft text-[red] border-red-600">
                Rejected
            </button>
            <p class="jobAbout text-gray-500 text-sm">${rejected.jobAbout}</p>

            <div class="space-x-2">
                <button class="btn btn-soft text-[green] border-green-600">Interview</button>
                <button class="btn btn-soft text-[red] border-red-600">Rejected</button>
            </div>
        `;

        sectionForRejected.append(div);
    });
}