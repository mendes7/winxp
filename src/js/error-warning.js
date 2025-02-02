//DUPLO CLIQUE NO ICONE DO INTERNET EXPLORER
$("#ie").dblclick(function () {
    const audio = new Audio("https://www.myinstants.com/media/sounds/erro.mp3");
    audio.play();
    $(".error").show();
  });

//CLICOU NO INTERNET EXPLORER DO MENU INICIAR
$("#ie-iniciar").click(function () {
  const audio = new Audio("https://www.myinstants.com/media/sounds/erro.mp3");
  audio.play();
  $(".error").show();
});
  
//CLICOU NO BOTAO "OK" DO DIALOG DE ERRO
$(".ok").click(function () {
  $(".error").hide();
});

//JANELA DE ERRO SER MÓVEL
$(".error").draggable();

//CLICOU NO BOTÃO DE FECHAR DO DIALOG DE ERRO
$("#erroFecha").click(function () {
  $(".error").hide();
});

//CLICOU NO BOTAO "OK" DO DIALOG DE WARNING
$(".ok").click(function () {
  $(".warning").hide();
});

//JANELA DE WARNING SER MÓVEL
$(".warning").draggable();

//CLICOU NO BOTÃO DE FECHAR DO DIALOG DE WARNING
$("#warningFecha").click(function () {
  $(".warning").hide();
});

document.addEventListener("DOMContentLoaded", function () {
  // Verifica se é um dispositivo móvel
  function isMobile() {
      return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  }

  // Aguarda o startup desaparecer
  setTimeout(() => {
      if (isMobile()) {
          document.querySelector(".warning").style.display = "block";
      }
  }, 4000); // Ajuste o tempo conforme o tempo do startup

  // Fecha o aviso ao clicar no botão "OK"
  document.querySelector(".ok").addEventListener("click", function () {
      document.querySelector(".warning").style.display = "none";
  });

  // Também fecha ao clicar no botão de fechar
  document.querySelector("#avisoFecha").addEventListener("click", function () {
      document.querySelector(".warning").style.display = "none";
  });
});