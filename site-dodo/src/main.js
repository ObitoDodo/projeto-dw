function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function SearchMenu() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function Text(el) {
  let text = document.getElementById(el);
  document.getElementById('content').innerHTML = text.dataset.value;
  document.getElementById('title').innerHTML = text.dataset.value2;
  document.getElementById('link').href = text.dataset.value3;
  document.getElementById('link').innerHTML = 'Materiais de apoio'
  document.getElementById('link').style.display = 'block'
}



// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  var tags = ["mon", "d", "y", "h", "m", "s"],
    corr = [dy, months[mo], yr, hou.pad(2), min.pad(2), sec.pad(2)];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// END CLOCK SCRIPT

// ---------- Dark-mode ----------

// Obtém a referência para o botão que alterna o modo claro/escuro
const toggleButton = document.querySelector("#toggle-mode");

// Obtém a referência para o elemento <body> do documento
const body = document.body;

// Define a chave que será usada para armazenar a preferência do modo escuro no armazenamento local do navegador
const storageKey = "darkModeEnabled";

// Verifica se a preferência do modo escuro já está armazenada no navegador
const darkModeEnabled = localStorage.getItem(storageKey) === "true";

// Função para alternar entre os modos claro e escuro
function toggleDarkMode() {
  // Inverte o valor da preferência do modo escuro
  const newDarkModeEnabled = !darkModeEnabled;

  // Atualiza a classe CSS no elemento <body> para aplicar o estilo correspondente ao modo escuro
  body.classList.toggle("dark-mode", newDarkModeEnabled);

  // Armazena a preferência do modo escuro no armazenamento local do navegador
  localStorage.setItem(storageKey, newDarkModeEnabled);

  location.reload();
}

// Adiciona um ouvinte de eventos ao botão para alternar o modo escuro quando ele for clicado
toggleButton.addEventListener("click", toggleDarkMode);

// Aplica o estilo inicial com base na preferência armazenada
body.classList.toggle("dark-mode", darkModeEnabled);
