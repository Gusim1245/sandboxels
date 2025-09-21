// Elements Customizados - Azul, Vermelho, Roxo

elements.azul = {
    color: ["#0000FF"],   // Azul
    behavior: [
        "   | ^ |   ",     // ^ representa puxar partículas para cima
        "   | X |   ",
        "   | X |   "
    ],
    state: "gas",
    density: 0.5
};

elements.vermelho = {
    color: ["#FF0000"],   // Vermelho
    behavior: [
        "   | v |   ",     // v representa empurrar partículas para baixo
        "   | X |   ",
        "   | X |   "
    ],
    state: "gas",
    density: 0.5
};

elements.roxo = {
    color: ["#800080"],   // Roxo
    behavior: [
        "XXX|XXX|XXX",     // X destrói qualquer elemento ao redor
        "XXX|XXX|XXX",
        "XXX|XXX|XXX"
    ],
    state: "solid",
    density: 1
};
