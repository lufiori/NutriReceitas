// CONFIG DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBgqgHk8HPWexgN1oKGDjrQ4XmSN4MRKOI",
  authDomain: "nutri-receitas-u92l41.firebaseapp.com",
  projectId: "nutri-receitas-u92l41",
  storageBucket: "nutri-receitas-u92l41.firebasestorage.app",
  messagingSenderId: "384116468446",
  appId: "1:384116468446:web:a63bde690aaf190ec6b04f"
};

// INICIAR
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const lista = document.getElementById("lista");

// BUSCAR RECEITAS DO BANCO
db.collection("receitas").get().then(snapshot => {
  snapshot.forEach(doc => {
    const r = doc.data();

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <strong>${r.nome}</strong><br>
      🔥 ${r.calorias} kcal
    `;

    div.onclick = () => abrir(r);

    lista.appendChild(div);
  });
});

function abrir(r) {
  document.getElementById("lista").classList.add("hidden");
  document.getElementById("detalhes").classList.remove("hidden");

  document.getElementById("titulo").innerText = r.nome;

  document.getElementById("nutricao").innerText =
    `🔥 ${r.calorias} kcal | 🥩 ${r.proteina}g | 🍞 ${r.carboidratos}g | 🧈 ${r.gordura}g`;

  document.getElementById("ingredientes").innerText =
    "Ingredientes: " + r.ingredientes;

  document.getElementById("preparo").innerText =
    "Preparo: " + r.preparo;
}

function voltar() {
  document.getElementById("lista").classList.remove("hidden");
  document.getElementById("detalhes").classList.add("hidden");
}
























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
