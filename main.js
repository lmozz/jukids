let full = false;
const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
            .then(() => console.log("Entraste a pantalla completa"))
            .catch((err) => console.error(`Error al entrar a pantalla completa: ${err.message}`));
    } else {
        document.exitFullscreen()
            .then(() => console.log("Saliste de pantalla completa"))
            .catch((err) => console.error(`Error al salir de pantalla completa: ${err.message}`));
    }
};
const exitFullscreen = () => {
    if (document.fullscreenElement) {
        document.exitFullscreen()
            .then(() => console.log("Saliste de pantalla completa"))
            .catch((err) => console.error(`Error al salir de pantalla completa: ${err.message}`));
    } else {
        console.log("No estás en modo pantalla completa");
    }
};
const fullScreen = () => {
    if (!full) {
        document.getElementsByClassName("hide-controller")[0].innerHTML = "Salir de Pantalla Completa";
        toggleFullscreen();
    } else {
        document.getElementsByClassName("hide-controller")[0].innerHTML = "Pantalla Completa";
        exitFullscreen();
    }
    full = !full;
};
const credits = () => {
    alert(`
        Valeria Zelaya ~ Lider del Proyecto & Diseñadora
        Katherine Solano ~ Preguntas al Publico
        Irvin Ramos ~ Costeo, Datos & Proyecciones
        Luis Moz ~ Graficos Power Bi
        `);
};