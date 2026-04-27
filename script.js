// CONFIG DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBgqgHk8HPWexgN1oKGDjrQ4XmSN4MRKOI",
  authDomain: "nutri-receitas-u92l41.firebaseapp.com",
  projectId: "nutri-receitas-u92l41",
  storageBucket: "nutri-receitas-u92l41.firebasestorage.app",
  messagingSenderId: "384116468446",
  appId: "1:384116468446:web:a63bde690aaf190ec6b04f"
};


// INICIAR FIREBASE
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// PEGAR DIV DA LISTA
const lista = document.getElementById("lista");

// BUSCAR RECEITAS DO BANCO
db.collection("Receitas").get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
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
  })
  .catch((error) => {
    console.error("Erro ao buscar dados:", error);
  });

// FUNÇÃO PARA ABRIR DETALHES
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

// VOLTAR PARA LISTA
function voltar() {
  document.getElementById("lista").classList.remove("hidden");
  document.getElementById("detalhes").classList.add("hidden");
}
