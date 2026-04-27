const receitas = [
  {
    nome: "Arroz com Ovo",
    calorias: 250,
    proteina: 10,
    carbo: 30,
    gordura: 8,
    ingredientes: "Arroz, ovo, sal",
    preparo: "Cozinhe o arroz e frite o ovo."
  },
  {
    nome: "Frango Grelhado",
    calorias: 300,
    proteina: 35,
    carbo: 5,
    gordura: 10,
    ingredientes: "Frango, sal, alho",
    preparo: "Tempere e grelhe o frango."
  }
];

const lista = document.getElementById("lista");

receitas.forEach((r, i) => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<strong>${r.nome}</strong><br>${r.calorias} kcal`;
  div.onclick = () => abrir(i);
  lista.appendChild(div);
});

function abrir(i) {
  const r = receitas[i];

  document.getElementById("lista").classList.add("hidden");
  document.getElementById("detalhes").classList.remove("hidden");

  document.getElementById("titulo").innerText = r.nome;
  document.getElementById("nutricao").innerText =
    `🔥 ${r.calorias} kcal | 🥩 ${r.proteina}g proteína | 🍞 ${r.carbo}g carbo | 🧈 ${r.gordura}g gordura`;

  document.getElementById("ingredientes").innerText =
    "Ingredientes: " + r.ingredientes;

  document.getElementById("preparo").innerText =
    "Preparo: " + r.preparo;
}

function voltar() {
  document.getElementById("lista").classList.remove("hidden");
  document.getElementById("detalhes").classList.add("hidden");
}