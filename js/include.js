fetch("components/navbar.html")
.then(response => response.text())
.then(data => {

    document.getElementById("navbar").innerHTML = data;

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

});
fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        const whatsappBtn = document.getElementById("whatsappBtn");

        if (whatsappBtn) {

            const message = "Hi OM 3D Gift Hub! I'm interested in your customized 3D printed gifts. Could you please share more details?";

            whatsappBtn.href =
                `https://wa.me/917639702817?text=${encodeURIComponent(message)}`;

            whatsappBtn.target = "_blank";
        }

    });