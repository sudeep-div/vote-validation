function checkVote() {

    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    let result = document.getElementById("result");


    // Check all fields
    if (name === "" || dob === "" || phone === "" || country === "") {

        result.innerHTML = "⚠️ Please enter all details.";
        result.style.color = "orange";

        return;
    }


    // Check phone number
    if (!/^[0-9]{10}$/.test(phone)) {

        result.innerHTML = "⚠️ Enter a valid 10-digit phone number.";
        result.style.color = "orange";

        return;
    }


    // Calculate age
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }


    // Check country
    if (country !== "india") {

        result.innerHTML = "❌ Please select India.";
        result.style.color = "red";

        return;
    }


    // Eligible
    if (age >= 18) {

        result.innerHTML =
            "✅ " + name + ", you are eligible to vote.";

        result.style.color = "lime";


        // Save data
        localStorage.setItem("voterName", name);
        localStorage.setItem("voterAge", age);
        localStorage.setItem("voterPhone", phone);


        // Go to dashboard
        setTimeout(function() {

            window.location.href = "./dashboard.html";

        }, 1500);

    }

    // Not eligible
    else {

        result.innerHTML =
            "❌ " + name + ", you are not eligible to vote.";

        result.style.color = "red";
    }
}