//EVENTO DE CLICK NO BOTÃO INICIAR
$("#iniciar").on("click", function () {
  //MODO ATIVO OU NÃO (TOOGLE)
  $("#iniciar").toggleClass("active");
  $("#menuIniciar").toggleClass("active");
});

//LIGAR O RELÓGIO PRIMEIRA VEZ
setTimeout(() => {
  var hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  $("#relogio").html(hora);
}, 100);

//CONTAR RELOGIO CADA SEGUNDO
setInterval(() => {
  var hora = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  });

  $("#relogio").html(hora);
}, 1000);

//ICONES DA ÁREA DE TRABALHO ARRASTÁVEIS
$(".desktop-icon").draggable({
  containment: ".area-de-trabalho",
  stop: function () {
    $(this).removeClass("selected");
    $(this).addClass("selected");
  }
});

//CLICOU EM ALGUMA PARTE DA ÁREA DE TRABALHO
$(".area-de-trabalho").click(function () {
  $("#menuIniciar").removeClass("active");
  $(".desktop-icon").each(function (index) {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    }
  });
});

//CLICOU NO SEGREDO
$("#segredo").dblclick(function () {
  window.open("https://youtu.be/lN98fwMvZXk?si=z0wV5UWQ2-AcVwUy");
});

//PREVINIR QUE ABRA O MENU PADRÃO DO NAVEGADOR (BOTÃO DIREITO)
$(document).contextmenu(function () {
  return false;
});

// JAVASCRIPT STARTUP
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("hidden"); // Oculta o conteúdo ao iniciar

  setTimeout(() => {
      document.querySelector(".windows__bg").style.display = "none"; // Esconde o startup
      document.body.classList.remove("hidden"); // Mostra o conteúdo principal
  }, 3000); // Ajuste o tempo conforme a duração do startup
});