function abrirModal(img, titulo, ano, texto, tags) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-titulo").innerText = titulo;
    document.getElementById("modal-ano").innerText = ano;
    document.getElementById("modal-texto").innerText = texto;

    const tagsContainer = document.getElementById("modal-tags");
    tagsContainer.innerHTML = "";
    if (tags) {
        tags.split("·").forEach(tag => {
            const span = document.createElement("span");
            span.className = "modal-tag";
            span.innerText = tag.trim();
            tagsContainer.appendChild(span);
        });
    }

    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function abrirModalCV(img) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-titulo").innerText = "";
    document.getElementById("modal-ano").innerText = "";
    document.getElementById("modal-texto").innerText = "";
    document.getElementById("modal-tags").innerHTML = "";
    modal.style.display = "flex";
    
}
