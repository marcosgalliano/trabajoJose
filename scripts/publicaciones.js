let publicaciones = [
    {
        usuario: "jsmith",
        ftoPerfil:"./assets/jssmith_perfil.jpg",
        imagenPubli:"./assets/imagenpubli_jssmith.jpg",
        comment:"¡Hermoso día en contacto con la naturaleza! 🌿💚"
    },
    {
        usuario: "jsmith",
        ftoPerfil:"./assets/jssmith_perfil.jpg",
        imagenPubli:"./assets/imagenpubli_jssmith.jpg",
        comment:"¡Hermoso día en contacto con la naturaleza! 🌿💚"
    }
]

const divPublicaciones = document.getElementById("divPublicaciones");

publicaciones.forEach((user) => {
  let div = document.createElement("div");

  let h1 = document.createElement("h1");
  h1.innerHTML = user.usuario;

  div.appendChild(h1);
  divPublicaciones.appendChild(div);
});