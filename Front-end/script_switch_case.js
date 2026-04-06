function trocaIdioma() {
    const idioma = document.getElementById("language").value;
    console.log("Idioma selecionado:", idioma);

    if (!idioma) {
        alert("Selecione um idioma no menu");
        return;
    }

    let texto;

    switch (idioma) {
        case "portugues":
            texto = "Seja bem-vindo(a)!";
            break;
        case "ingles":
            texto = "Welcome!";
            break;
        case "espanhol":
            texto = "Bienvenido!";
            break;
        case "frances":
            texto = "Bienvenue!";
            break;
        default:
            texto = "Selecione um idioma no menu"
            break;
    }

    document.getElementById("resultado").innerHTML = texto;
    alert(texto);

}