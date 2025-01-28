const perfil = document.querySelector(".perfil");
const opçoes = document.querySelector(".opçoes");
const sobrepor = document.querySelector(".sobrepor");
const pesquisaInput = document.getElementById("pesquisa")
const semResultados = document.getElementById("semResultados")
const categoria = document.querySelectorAll(".categorias")
document.getElementById('pesquisa').addEventListener('input', (e) => {
    

    const termo = e.target.value.toLowerCase();
    const videos = document.querySelectorAll('.videos .video');
    let encontrou = false;

    videos.forEach((video) => {
        const titulo = video.querySelector('iframe').title.toLowerCase();
        if (titulo.includes(termo)) {
            video.style.display = 'block';
            encontrou = true;
        } else {
            video.style.display = 'none';
        }
    });
    if (encontrou) {
        semResultados.style.display = 'none'
    } else{
        semResultados.style.display = 'block'
    }

});

function formatarString(valor){
    return valor.toLowerCase().trim();
}
perfil.addEventListener("click", () => {
  opçoes.style.display = opçoes.style.display === "block" ? "none" : "block";
  sobrepor.style.display =
    sobrepor.style.display === "block" ? "none" : "block";
  opçoes.style.background;
});

overlay.addEventListener("click", () => {
  opçoes.style.display = "none";
  sobrepor.style.display = "none";
});

function scrollCarousel(container, direction) {
  const scrollAmount = 300;
  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
}

document.querySelectorAll(".categoria").forEach((categoria) => {
  const videosContainer = categoria.querySelector(".videos");

  const leftButton = document.createElement("button");
  leftButton.textContent = "<";
  leftButton.className = "scroll-btn left";
  leftButton.addEventListener("click", () =>
    scrollCarousel(videosContainer, "left")
  );

  const rightButton = document.createElement("button");
  rightButton.textContent = ">";
  rightButton.className = "scroll-btn right";
  rightButton.addEventListener("click", () =>
    scrollCarousel(videosContainer, "right")
  );

  categoria.appendChild(leftButton);
  categoria.appendChild(rightButton);
});
function scrollVideos(button, direction) {
    const videos = button.parentElement.querySelector('.videos');
    const scrollAmount = videos.clientWidth / 2; 
    videos.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}