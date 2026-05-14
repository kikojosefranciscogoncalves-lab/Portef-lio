function abrirModal(img, texto) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTexto = document.getElementById("modal-texto");

    modal.style.display = "flex";
    modalImg.src = img;
    modalTexto.innerText = texto;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}