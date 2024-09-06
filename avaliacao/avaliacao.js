document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star");
    const submitButton = document.getElementById("send-whatsapp");
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener("click", () => {
            selectedRating = star.getAttribute("data-value");
            stars.forEach(s => s.classList.remove("selected"));
            star.classList.add("selected");
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("selected");
            }
        });
    });

    submitButton.addEventListener("click", () => {
        const reviewText = document.getElementById("review").value;
        const whatsappNumber = "41991956284"; // Número de WhatsApp do restaurante
        const message = `*Avaliação:* ${selectedRating} estrelas\n*Comentário:* ${reviewText}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)} `;
        submitButton.href = whatsappURL;
    });
});
