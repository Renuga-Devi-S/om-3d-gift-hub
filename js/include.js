fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".nav-links");

        if(menuToggle && navLinks){

            menuToggle.addEventListener("click", () => {

                navLinks.classList.toggle("active");

            });

        }

    })
    .catch(error => console.log(error));