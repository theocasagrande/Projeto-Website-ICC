function abrirModal(card) {
    const nome = card.querySelector(".membro-nome").innerText;
    const cargo = card.querySelector(".membro-cargo").innerText;
    const img = card.querySelector(".membro-img").src;
    const info = card.querySelector(".membro-info").innerText;

    const modal = document.getElementById("modal-overlay");
    const detalhes = document.getElementById("modal-detalhes");

    detalhes.innerHTML = `
        <img src="${img}" style="width:120px; height:120px; border-radius:50%; object-fit:cover; margin-bottom:1rem;">
        <h2 style="margin-bottom:0.5rem;">${nome}</h2>
        <h4 style="color:#b20000; margin-bottom:1rem;">${cargo}</h4>
        <p style="color:#333;">${info}</p>
    `;

    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal-overlay").style.display = "none";
}