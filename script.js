
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html") {
        document.getElementById("continueBtn").addEventListener("click", function () {
            const selectedTime = document.getElementById("timeInput").value;
            localStorage.setItem("selectedTime", selectedTime);
            window.location.href = "nextPage.html";
        });
    }

    if (currentPage === "nextPage.html") {
        document.getElementById("detailsForm").addEventListener("submit", function (event) {
            event.preventDefault();
            ["firstName", "lastName", "email", "phone"].forEach(id => {
                localStorage.setItem(id, document.getElementById(id).value);
            });
            window.location.href = "printimi.html";
        });
    }

    if (currentPage === "printimi.html") {
        ["selectedTime", "firstName", "lastName", "email", "phone"].forEach(id => {
            document.getElementById(id).textContent = localStorage.getItem(id) || "Not Provided";
        });
    }
});
