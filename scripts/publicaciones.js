let publicaciones = [
  {
    usuario: "carlover_91",
    ftoPerfil: "./assets/carlover91_perfil.jpg",
    imagenPubli: "./assets/imagenpubli_carlover91.jpg",
    seguidores: "seguidores 876",
    comment: "¡Un día perfecto para conducir con estilo! 🚗💨",
  },
  {
    usuario: "MotorEnthusiast",
    ftoPerfil: "./assets/motorenthusiast_fto.jpg",
    imagenPubli: "./assets/motorenthusiast_publi.jpg",
    seguidores: "seguidores 2391",
    comment: "¡Compartiendo la emoción de los motores poderosos!",
  },
  {
    usuario: "SpeedDemon19",
    ftoPerfil: "./assets/speeddemon19_fto.jpeg",
    imagenPubli: "./assets/speeddemon19_publi.jpg",
    seguidores: "seguidores 429",
    comment: "🔥🏁 #SpeedDemon #AdrenalineJunkie",
  },
];
const divPublicaciones = document.getElementById("divPublicaciones");

publicaciones.forEach((user) => {
  let div = document.createElement("div");
  div.classList.add("divContenedorPubli");

  let div2 = document.createElement("div");
  div2.classList.add("perfil_div");

  let h2 = document.createElement("h2");
  h2.innerHTML = user.usuario;

  let h4Perfil = document.createElement("h4");
  h4Perfil.innerHTML = user.seguidores;

  let img = document.createElement("img");
  img.setAttribute("src", user.ftoPerfil);
  img.classList.add("ftoPerfil");

  div2.appendChild(img);
  div2.appendChild(h2);
  div2.appendChild(h4Perfil);

  let div3 = document.createElement("div");
  div3.classList.add("div_imagen_publi");

  let img2 = document.createElement("img");
  img2.setAttribute("src", user.imagenPubli);
  img2.classList.add("imagenPublicacion");

  div3.appendChild(img2);

  let div4 = document.createElement("div");
  div4.classList.add("div_coments");

  let h4 = document.createElement("h4");
  h4.innerHTML = user.comment;

  div4.appendChild(h4);

  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);

  divPublicaciones.appendChild(div);
});
