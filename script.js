// script.js
function scrollToSubscribe() {
    document.getElementById("subscribe").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    document.getElementById("responseMessage").innerText = `Gracias por suscribirte, ${email}!`;
    document.getElementById("subscribe-form").reset();
});
