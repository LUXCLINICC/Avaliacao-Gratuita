// =====================================
// MENU FIXO
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
    } else {
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";
    }

});


// =====================================
// ANIMAÇÕES AO FAZER SCROLL
// =====================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});


// =====================================
// SCROLL SUAVE
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const destinoId = this.getAttribute("href");

        // Ignora botões que usam apenas #
        if(destinoId === "#"){
            return;
        }

        const destino = document.querySelector(destinoId);

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

// =====================================
// BOTÃO WHATSAPP
// =====================================

const whatsapp = document.querySelector(".whatsapp");

if(whatsapp){

    whatsapp.style.opacity = "0";
    whatsapp.style.transform = "scale(.8)";
    whatsapp.style.transition = ".3s";

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            whatsapp.style.opacity = "1";
            whatsapp.style.transform = "scale(1)";

        }else{

            whatsapp.style.opacity = "0";
            whatsapp.style.transform = "scale(.8)";

        }

    });

}


// =====================================
// POPUP FORMULÁRIO
// =====================================

const popup = document.getElementById("popupFormulario");
const botoesFormulario = document.querySelectorAll(".abrirFormulario");
const fechar = document.querySelector(".fechar");

botoesFormulario.forEach(botao => {

    botao.addEventListener("click", function(e){

        e.preventDefault();

        popup.style.display = "flex";

    });

});


fechar.addEventListener("click", function(){

    popup.style.display = "none";

});


window.addEventListener("click", function(e){

    if(e.target === popup){

        popup.style.display = "none";


    }

});

// =====================================
// ENVIO FORMULÁRIO WEB3FORMS SEM SAIR DA PÁGINA
// =====================================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault();

        const dados = new FormData(formulario);

        try {

            const resposta = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: dados
            });

            if (resposta.ok) {

                document.querySelector(".popup-content").innerHTML = `
                    <div class="sucesso">
                        <h2>✨ Pedido recebido com sucesso!</h2>

                        <p>
                            Obrigada por escolher a Lux Clinic.<br><br>
                            Recebemos o seu pedido de avaliação.<br>
                            Em breve entraremos em contacto para agendar a sua avaliação personalizada.
                        </p>

                        <button class="btn-primary fechar-popup">
                            Fechar
                        </button>
                    </div>
                `;

                document.querySelector(".fechar-popup").addEventListener("click", function () {
                    popup.style.display = "none";
                    location.reload();
                });

            } else {

                alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");

            }

        } catch (erro) {

            console.error(erro);
            alert("Não foi possível enviar o formulário. Verifique a ligação à Internet.");

        }

    });

} // <-- ESTA CHAVETA É OBRIGATÓRIA

// =====================================
// MENU MOBILE
// =====================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}