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

//DUPLO CLIQUE NO ÍCONE DA LIXEIRA
$("#lixeira").dblclick(function () {
  $("#lixeira").removeClass("selected");
  $("#lixeira").addClass("selected");
  $(".janela").css("display", "flex");
  $(".prog").addClass("active");
  $(".prog").css("display", "flex");
});

//DUPLO CLIQUE NO ÍCONE DO NOTEPAD
$("#notepad").dblclick(function () {
  $("#notepad").removeClass("selected");
  $("#notepad").addClass("selected");
  $(".janela-notepad").css("display", "flex");
  $(".prog-notepad").addClass("active");
  $(".prog-notepad").css("display", "flex");
});

//DUPLO CLIQUE NO ICONE DO INTERNET EXPLORER
$("#ie").dblclick(function () {
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

//CLICOU NO INTERNET EXPLORER DO MENU INICIAR
$("#ie-iniciar").click(function () {
  const audio = new Audio("https://www.myinstants.com/media/sounds/erro.mp3");
  audio.play();
  $(".error").show();
});

//TORNAR JANELA DA LIXEIRA ARRASTÁVEL NA ÁREA DE TRABALHO
$(".janela").draggable({
  containment: ".area-de-trabalho"
});

//TORNAR JANELA DO NOTEPAD ARRASTÁVEL NA ÁREA DE TRABALHO
$(".janela-notepad").draggable({
  containment: ".area-de-trabalho"
});

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
  window.open("https://www.youtube.com/watch?v=UVph8lkwl1E&list=LL&index=102");
});

//PREVINIR QUE ABRA O MENU PADRÃO DO NAVEGADOR (BOTÃO DIREITO)
$(document).contextmenu(function () {
  return false;
});

//CLICOU NO BOTÃO DE FECHAR DA LIXEIRA
$("button[aria-label=Close]").click(function () {
  $(".janela").hide();
  $(".prog").hide();
});

//CLICOU NO BOTÃO DE FECHAR DO NOTEPAD
$("button[aria-label=Close-Notepad]").click(function () {
  $(".janela-notepad").hide();
  $(".prog-notepad").hide();
});

//CLICOU EM MINIMIZAR LIXEIRA
$("button[aria-label=Minimize]").click(function () {
  $(".janela").animate(
    {
      height: 0,
      width: "20px",
      top: $(window).height(),
      left: "140px"
    },
    200,
    function () {
      $(this).hide();
      $(".prog").removeClass("active");
    }
  );
});

//CLICOU EM MINIMIZAR NOTEPAD
$("button[aria-label=Minimize-Notepad]").click(function () {
  $(".janela-notepad").animate(
    {
      height: 0,
      width: "20px",
      top: $(window).height(),
      left: "140px"
    },
    200,
    function () {
      $(this).hide();
      $(".prog-notepad").removeClass("active");
    }
  );
});

//CLICOU EM MAXIMIZAR LIXEIRA
$("button[aria-label=Maximize]").click(function () {
  if ($(".janela").attr("data-status") == "restaurado") {
    $(".janela").animate(
      {
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
      },
      200,
      function () {
        $(".janela").attr("data-status", "maximizado");
      }
    );
  } else {
    $(".janela").animate(
      {
        height: "400px",
        width: "600px",
        top: "25%",
        left: "27%"
      },
      200,
      function () {
        $(".prog").addClass("active");
        $(".janela").attr("data-status", "restaurado");
      }
    );
  }
});

//CLICOU EM MAXIMIZAR NOTEPAD
$("button[aria-label=Maximize-Notepad]").click(function () {
  if ($(".janela-notepad").attr("data-status") == "restaurado") {
    $(".janela-notepad").animate(
      {
        height: "100%",
        width: "100%",
        top: 0,
        left: 0
      },
      200,
      function () {
        $(".janela-notepad").attr("data-status", "maximizado");
      }
    );
  } else {
    $(".janela-notepad").animate(
      {
        height: "400px",
        width: "600px",
        top: "25%",
        left: "27%"
      },
      200,
      function () {
        $(".prog-notepad").addClass("active");
        $(".janela-notepad").attr("data-status", "restaurado");
      }
    );
  }
});

//TORNAR JANELA REDIMENSIONAVEL
$(".janela").resizable({
  minWidth: 200,
  minHeight: 50
});

//TORNAR NOTEPAD REDIMENSIONAVEL
$(".janela-notepad").resizable({
  minWidth: 210,
  minHeight: 50
});

//CLICOU NA LIXEIRA NA BARRA DE TAREFAS
$(".prog").click(function () {
  if ($(this).hasClass("active")) {
    $(".janela").animate(
      {
        height: 0,
        width: "20px",
        top: $(window).height(),
        left: "140px"
      },
      200,
      function () {
        $(this).hide();
        $(".prog").removeClass("active");
      }
    );
  } else {
    $(".janela").show();
    if ($(".janela").attr("data-status") == "restaurado") {
      $(".janela").animate(
        {
          height: "400px",
          width: "600px",
          top: "25%",
          left: "27%"
        },
        200,
        function () {
          $(".prog").addClass("active");
        }
      );
    } else {
      $(".janela").animate(
        {
          height: "100%",
          width: "100%",
          top: 0,
          left: 0
        },
        200,
        function () {
          $(".prog").addClass("active");
        }
      );
    }
  }
});

//CLICOU NO NOTEPAD NA BARRA DE TAREFAS
$(".prog-notepad").click(function () {
  if ($(this).hasClass("active")) {
    $(".janela-notepad").animate(
      {
        height: 0,
        width: "20px",
        top: $(window).height(),
        left: "140px"
      },
      200,
      function () {
        $(this).hide();
        $(".prog-notepad").removeClass("active");
      }
    );
  } else {
    $(".janela-notepad").show();
    if ($(".janela-notepad").attr("data-status") == "restaurado") {
      $(".janela-notepad").animate(
        {
          height: "400px",
          width: "600px",
          top: "25%",
          left: "27%"
        },
        200,
        function () {
          $(".prog-notepad").addClass("active");
        }
      );
    } else {
      $(".janela-notepad").animate(
        {
          height: "100%",
          width: "100%",
          top: 0,
          left: 0
        },
        200,
        function () {
          $(".prog-notepad").addClass("active");
        }
      );
    }
  }
});