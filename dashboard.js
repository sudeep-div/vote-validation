let voterName = localStorage.getItem("voterName");
let voterAge = localStorage.getItem("voterAge");
let voterPhone = localStorage.getItem("voterPhone");


// -----------------------------
// VOTER INFORMATION
// -----------------------------

voterName = voterName || "Voter";

document.getElementById("userName").textContent =
    voterName;

document.getElementById("profileName").textContent =
    voterName;

document.getElementById("displayAge").textContent =
    voterAge ? voterAge + " years" : "-";

document.getElementById("displayPhone").textContent =
    voterPhone || "-";


// First letter of name

let firstLetter =
    voterName.charAt(0).toUpperCase();

document.getElementById("avatarLetter").textContent =
    firstLetter;

document.getElementById("profileLetter").textContent =
    firstLetter;


// -----------------------------
// DEMO STATISTICS
// -----------------------------

let totalVoters = 1000;

let votesCast =
    Number(localStorage.getItem("demoVotes")) || 450;


// -----------------------------
// UPDATE STATISTICS
// -----------------------------

function updateDashboard() {

    let remaining =
        totalVoters - votesCast;

    let turnout =
        (votesCast / totalVoters) * 100;


    document.getElementById("totalVoters").textContent =
        totalVoters;

    document.getElementById("votesCast").textContent =
        votesCast;

    document.getElementById("remaining").textContent =
        remaining;

    document.getElementById("turnout").textContent =
        turnout.toFixed(1) + "%";
}


// -----------------------------
// DEMO VOTE
// -----------------------------

function recordDemoVote() {

    if (votesCast >= totalVoters) {

        document.getElementById("demoMessage").textContent =
            "All demo votes have been recorded.";

        return;
    }


    votesCast++;


    localStorage.setItem(
        "demoVotes",
        votesCast
    );


    updateDashboard();


    document.getElementById("demoMessage").textContent =
        "✓ Demo vote recorded successfully.";
}


// -----------------------------
// LOGOUT
// -----------------------------

function logout() {

    window.location.href = "index.html";
}


// -----------------------------
// OFFICIAL SERVICES
// -----------------------------

function openElectoralSearch() {

    window.open(
        "https://electoralsearch.eci.gov.in/",
        "_blank"
    );
}


function openVoterServices() {

    window.open(
        "https://voters.eci.gov.in/",
        "_blank"
    );
}


function openECI() {

    window.open(
        "https://www.eci.gov.in/",
        "_blank"
    );
}


// -----------------------------
// START DASHBOARD
// -----------------------------

updateDashboard();