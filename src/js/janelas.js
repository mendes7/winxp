//TORNAR JANELA DA LIXEIRA ARRASTÁVEL NA ÁREA DE TRABALHO
$(".janela, .janela_pesquisa").draggable({
    containment: ".area-de-trabalho"
});

//TORNAR JANELA REDIMENSIONAVEL
$(".janela").resizable({
    minWidth: 330,
    minHeight: 300
});

//TORNAR JANELA REDIMENSIONAVEL
$(".janela_pesquisa").resizable({
    minWidth: 970,
    minHeight: 490
});

// BOTÃO FECHAR
$("button[data-janela]").click(function () {
    const janelaId = $(this).attr("data-janela");
    $("#" + janelaId).hide();
    $("#prog" + janelaId.replace("janela", "")).hide();
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//DUPLO CLIQUE NO ÍCONE DA LIXEIRA
$("#lixeira").dblclick(function () {
    $("#lixeira").addClass("selected");
    $("#janelalixeira").css("display", "flex");
    $("#proglixeira").addClass("active").css("display", "flex");
});

//DUPLO CLIQUE NO ÍCONE DO NOTEPAD
$("#notepad").dblclick(function () {
    $("#notepad").removeClass("selected");
    $("#notepad").addClass("selected");
    $("#janelanotepad").css("display", "flex");
    $("#prognotepad").addClass("active").css("display", "flex");
});

//DUPLO CLIQUE NO ÍCONE DO NOTEPAD Y2K
$("#notepad-y2k").dblclick(function () {
    $("#notepad-y2k").removeClass("selected");
    $("#notepad-y2k").addClass("selected");
    $("#janelanotepad-y2k").css("display", "flex");
    $("#prognotepad-y2k").addClass("active").css("display", "flex");
});

//DUPLO CLIQUE NO ÍCONE DO NOTEPAD WEBCORE
$("#notepad-webcore").dblclick(function () {
    $("#notepad-webcore").removeClass("selected");
    $("#notepad-webcore").addClass("selected");
    $("#janelanotepad-webcore").css("display", "flex");
    $("#prognotepad-webcore").addClass("active").css("display", "flex");
});

//DUPLO CLIQUE NO ÍCONE DO NOTEPAD FRUTIGER
$("#notepad-frutiger").dblclick(function () {
    $("#notepad-frutiger").removeClass("selected");
    $("#notepad-frutiger").addClass("selected");
    $("#janelanotepad-frutiger").css("display", "flex");
    $("#prognotepad-frutiger").addClass("active").css("display", "flex");
});

//DUPLO CLIQUE NO ÍCONE DA PASTA
$("#pasta").dblclick(function () {
    $("#pasta").removeClass("selected");
    $("#pasta").addClass("selected");
    $("#janelapasta").css("display", "flex");
    $("#progpasta").addClass("active").css("display", "flex");
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// BOTÃO MINIMIZAR LIXEIRA
$("button[aria-label='Minimize'][data-janela='janelalixeira']").click(function () {    
    $("#janelalixeira").animate(
        200,
        function () {
            $("#janelalixeira").hide(); // Esconde apenas a janela clicada
            $("#proglixeira").removeClass("active").css("display", "flex"); // Exibe o ícone da barra de tarefas
        }
    );
});

// BOTÃO MINIMIZAR NOTEPAD
$("button[aria-label='Minimize'][data-janela='janelanotepad']").click(function () {    
    $("#janelanotepad").animate(
        200,
        function () {
            $("#janelanotepad").hide(); // Esconde apenas a janela clicada
            $("#prognotepad").removeClass("active").css("display", "flex"); // Exibe o ícone da barra de tarefas
        }
    );
});

// BOTÃO MINIMIZAR NOTEPAD Y2K
$("button[aria-label='Minimize'][data-janela='janelanotepad-y2k']").click(function () {    
    $("#janelanotepad-y2k").animate(
        200,
        function () {
            $("#janelanotepad-y2l").hide(); // Esconde apenas a janela clicada
            $("#prognotepad-y2k").removeClass("active").css("display", "flex"); // Exibe o ícone da barra de tarefas
        }
    );
});

// BOTÃO MINIMIZAR NOTEPAD WEBCORE
$("button[aria-label='Minimize'][data-janela='janelanotepad-webcore']").click(function () {    
    $("#janelanotepad-webcore").animate(
        200,
        function () {
            $("#janelanotepad-y2l").hide(); // Esconde apenas a janela clicada
            $("#prognotepad-webcore").removeClass("active").css("display", "flex"); // Exibe o ícone da barra de tarefas
        }
    );
});

// BOTÃO MINIMIZAR NOTEPAD FRUTIGER
$("button[aria-label='Minimize'][data-janela='janelanotepad-frutiger']").click(function () {    
    $("#janelanotepad-frutiger").animate(
        200,
        function () {
            $("#janelanotepad-y2l").hide(); // Esconde apenas a janela clicada
            $("#prognotepad-frutiger").removeClass("active").css("display", "flex"); // Exibe o ícone da barra de tarefas
        }
    );
});

// BOTÃO MINIMIZAR PASTA
$("button[aria-label='Minimize'][data-janela='janelapasta']").click(function () {    
    $("#janelapasta").animate(
        200,
        function () {
            $("#janelapasta").hide(); // Esconde apenas a janela clicada
            $("#progpasta").removeClass("active").css("display", "flex"); // Exibe o ícone da barra de tarefas
        }
    );
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// BOTÃO MAXIMIZAR LIXEIRA
$("button[aria-label='Maximize'][data-janela='janelalixeira']").click(function () {
    const janela = $("#janelalixeira");
    const prog = $("#proglixeira");

    if (janela.attr("data-status") === "restaurado") {
        // Salvar a posição e tamanho original da janela
        janela.data("original-size", {
            width: janela.width(),
            height: janela.height(),
            top: janela.position().top,
            left: janela.position().left
        });

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        // Maximizar a janela
        janela.stop().animate(
            {
                width: "100vw",    // 100% da largura da tela
                height: "100vh",   // 100% da altura da tela
                top: 0,            // Colocar no topo
                left: 0            // Colocar à esquerda
            },
            200,
            function () {
                janela.attr("data-status", "maximizado"); // Atualizar o status
                prog.addClass("active"); // Remover a classe active, mas manter visível
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    } else if (janela.attr("data-status") === "maximizado") {
        // Restaurar a janela ao tamanho e posição originais
        const originalSize = janela.data("original-size");

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        janela.stop().animate(
            {
                width: originalSize.width + "px", // Restaurar o tamanho
                height: originalSize.height + "px", // Restaurar o tamanho
                top: originalSize.top + "px", // Posição restaurada
                left: originalSize.left + "px" // Posição restaurada
            },
            200,
            function () {
                janela.attr("data-status", "restaurado"); // Atualizar o status
                janela.css("zIndex", 990); // Restaurar o z-index
                prog.addClass("active"); // Adicionar a classe active
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    }
});

// BOTÃO MAXIMIZAR NOTEPADS
$("button[aria-label='Maximize'][data-janela='janelanotepad']").click(function () {
    const janela = $("#janelanotepad");
    const prog = $("#prognotepad");

    if (janela.attr("data-status") === "restaurado") {
        // Salvar a posição e tamanho original da janela
        janela.data("original-size", {
            width: janela.width(),
            height: janela.height(),
            top: janela.position().top,
            left: janela.position().left
        });

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        // Maximizar a janela
        janela.stop().animate(
            {
                width: "100vw",    // 100% da largura da tela
                height: "100vh",   // 100% da altura da tela
                top: 0,            // Colocar no topo
                left: 0            // Colocar à esquerda
            },
            200,
            function () {
                janela.attr("data-status", "maximizado"); // Atualizar o status
                prog.addClass("active"); // Remover a classe active, mas manter visível
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    } else if (janela.attr("data-status") === "maximizado") {
        // Restaurar a janela ao tamanho e posição originais
        const originalSize = janela.data("original-size");

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        janela.stop().animate(
            {
                width: originalSize.width + "px", // Restaurar o tamanho
                height: originalSize.height + "px", // Restaurar o tamanho
                top: originalSize.top + "px", // Posição restaurada
                left: originalSize.left + "px" // Posição restaurada
            },
            200,
            function () {
                janela.attr("data-status", "restaurado"); // Atualizar o status
                janela.css("zIndex", 990); // Restaurar o z-index
                prog.addClass("active"); // Adicionar a classe active
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    }
});

// BOTÃO MAXIMIZAR NOTEPADS Y2K
$("button[aria-label='Maximize'][data-janela='janelanotepad-y2k']").click(function () {
    const janela = $("#janelanotepad-y2k");
    const prog = $("#prognotepad-y2k");

    if (janela.attr("data-status") === "restaurado") {
        // Salvar a posição e tamanho original da janela
        janela.data("original-size", {
            width: janela.width(),
            height: janela.height(),
            top: janela.position().top,
            left: janela.position().left
        });

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        // Maximizar a janela
        janela.stop().animate(
            {
                width: "100vw",    // 100% da largura da tela
                height: "96vh",   // 100% da altura da tela
                top: 0,            // Colocar no topo
                left: 0            // Colocar à esquerda
            },
            200,
            function () {
                janela.attr("data-status", "maximizado"); // Atualizar o status
                prog.addClass("active"); // Remover a classe active, mas manter visível
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    } else if (janela.attr("data-status") === "maximizado") {
        // Restaurar a janela ao tamanho e posição originais
        const originalSize = janela.data("original-size");

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        janela.stop().animate(
            {
                width: originalSize.width + "px", // Restaurar o tamanho
                height: originalSize.height + "px", // Restaurar o tamanho
                top: originalSize.top + "px", // Posição restaurada
                left: originalSize.left + "px" // Posição restaurada
            },
            200,
            function () {
                janela.attr("data-status", "restaurado"); // Atualizar o status
                janela.css("zIndex", 990); // Restaurar o z-index
                prog.addClass("active"); // Adicionar a classe active
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    }
});

// BOTÃO MAXIMIZAR NOTEPADS WEBCORE
$("button[aria-label='Maximize'][data-janela='janelanotepad-webcore']").click(function () {
    const janela = $("#janelanotepad-webcore");
    const prog = $("#prognotepad-webcore");

    if (janela.attr("data-status") === "restaurado") {
        // Salvar a posição e tamanho original da janela
        janela.data("original-size", {
            width: janela.width(),
            height: janela.height(),
            top: janela.position().top,
            left: janela.position().left
        });

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        // Maximizar a janela
        janela.stop().animate(
            {
                width: "100vw",    // 100% da largura da tela
                height: "96vh",   // 100% da altura da tela
                top: 0,            // Colocar no topo
                left: 0            // Colocar à esquerda
            },
            200,
            function () {
                janela.attr("data-status", "maximizado"); // Atualizar o status
                prog.addClass("active"); // Remover a classe active, mas manter visível
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    } else if (janela.attr("data-status") === "maximizado") {
        // Restaurar a janela ao tamanho e posição originais
        const originalSize = janela.data("original-size");

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        janela.stop().animate(
            {
                width: originalSize.width + "px", // Restaurar o tamanho
                height: originalSize.height + "px", // Restaurar o tamanho
                top: originalSize.top + "px", // Posição restaurada
                left: originalSize.left + "px" // Posição restaurada
            },
            200,
            function () {
                janela.attr("data-status", "restaurado"); // Atualizar o status
                janela.css("zIndex", 990); // Restaurar o z-index
                prog.addClass("active"); // Adicionar a classe active
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    }
});

// BOTÃO MAXIMIZAR NOTEPADS FRUTIGER
$("button[aria-label='Maximize'][data-janela='janelanotepad-frutiger']").click(function () {
    const janela = $("#janelanotepad-frutiger");
    const prog = $("#prognotepad-frutiger");

    if (janela.attr("data-status") === "restaurado") {
        // Salvar a posição e tamanho original da janela
        janela.data("original-size", {
            width: janela.width(),
            height: janela.height(),
            top: janela.position().top,
            left: janela.position().left
        });

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        // Maximizar a janela
        janela.stop().animate(
            {
                width: "100vw",    // 100% da largura da tela
                height: "96vh",   // 100% da altura da tela
                top: 0,            // Colocar no topo
                left: 0            // Colocar à esquerda
            },
            200,
            function () {
                janela.attr("data-status", "maximizado"); // Atualizar o status
                prog.addClass("active"); // Remover a classe active, mas manter visível
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    } else if (janela.attr("data-status") === "maximizado") {
        // Restaurar a janela ao tamanho e posição originais
        const originalSize = janela.data("original-size");

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        janela.stop().animate(
            {
                width: originalSize.width + "px", // Restaurar o tamanho
                height: originalSize.height + "px", // Restaurar o tamanho
                top: originalSize.top + "px", // Posição restaurada
                left: originalSize.left + "px" // Posição restaurada
            },
            200,
            function () {
                janela.attr("data-status", "restaurado"); // Atualizar o status
                janela.css("zIndex", 990); // Restaurar o z-index
                prog.addClass("active"); // Adicionar a classe active
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    }
});

// BOTÃO MAXIMIZAR PASTA
$("button[aria-label='Maximize'][data-janela='janelapasta']").click(function () {
    const janela = $("#janelapasta");
    const prog = $("#progpasta");

    if (janela.attr("data-status") === "restaurado") {
        // Salvar a posição e tamanho original da janela
        janela.data("original-size", {
            width: janela.width(),
            height: janela.height(),
            top: janela.position().top,
            left: janela.position().left
        });

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        // Maximizar a janela
        janela.stop().animate(
            {
                width: "100vw",    // 100% da largura da tela
                height: "100vh",   // 100% da altura da tela
                top: 0,            // Colocar no topo
                left: 0            // Colocar à esquerda
            },
            200,
            function () {
                janela.attr("data-status", "maximizado"); // Atualizar o status
                prog.addClass("active"); // Remover a classe active, mas manter visível
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    } else if (janela.attr("data-status") === "maximizado") {
        // Restaurar a janela ao tamanho e posição originais
        const originalSize = janela.data("original-size");

        // Garantir que a janela esteja visível
        janela.css("display", "flex");

        janela.stop().animate(
            {
                width: originalSize.width + "px", // Restaurar o tamanho
                height: originalSize.height + "px", // Restaurar o tamanho
                top: originalSize.top + "px", // Posição restaurada
                left: originalSize.left + "px" // Posição restaurada
            },
            200,
            function () {
                janela.attr("data-status", "restaurado"); // Atualizar o status
                janela.css("zIndex", 990); // Restaurar o z-index
                prog.addClass("active"); // Adicionar a classe active
                prog.css("display", "flex"); // Garantir que o ícone da barra de tarefas fique visível
            }
        );
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//CLICOU NA LIXEIRA NA BARRA DE TAREFAS
$("#proglixeira").click(function () {
    if ($(this).hasClass("active")) {
        $("#janelalixeira").animate(
        200,
        function () {
            $(this).hide();
            $("#proglixeira").removeClass("active");
        }
    );
    } else {
    $("#janelalixeira").show();
    if ($("#janelalixeira").attr("data-status") == "restaurado") {
        $("#janelalixeira").animate(
        200,
        function () {
            $("#proglixeira").addClass("active");
        }
        );
      } else {
        $("#janelalixeira").animate(
          200,
          function () {
            $("#proglixeira").addClass("active");
          }
        );
      }
    }
});
  
//CLICOU NA NOTEPAD NA BARRA DE TAREFAS
$("#prognotepad").click(function () {
    if ($(this).hasClass("active")) {
        $("#janelanotepad").animate(
        200,
        function () {
            $(this).hide();
            $("#prognotepad").removeClass("active");
        }
    );
    } else {
    $("#janelanotepad").show();
    if ($("#janelanotepad").attr("data-status") == "restaurado") {
        $("#janelanotepad").animate(
        200,
        function () {
            $("#prognotepad").addClass("active");
        }
        );
      } else {
        $("#janelanotepad").animate(
          200,
          function () {
            $("#prognotepad").addClass("active");
          }
        );
      }
    }
});

//CLICOU NA NOTEPAD Y2K NA BARRA DE TAREFAS
$("#prognotepad-y2k").click(function () {
    if ($(this).hasClass("active")) {
        $("#janelanotepad-y2k").animate(
        200,
        function () {
            $(this).hide();
            $("#prognotepad-y2k").removeClass("active");
        }
    );
    } else {
    $("#janelanotepad-y2k").show();
    if ($("#janelanotepad-y2k").attr("data-status") == "restaurado") {
        $("#janelanotepad-y2k").animate(
        200,
        function () {
            $("#prognotepad-y2k").addClass("active");
        }
        );
      } else {
        $("#janelanotepad-y2k").animate(
          200,
          function () {
            $("#prognotepad-y2k").addClass("active");
          }
        );
      }
    }
});

//CLICOU NA NOTEPAD WEBCORE NA BARRA DE TAREFAS
$("#prognotepad-webcore").click(function () {
    if ($(this).hasClass("active")) {
        $("#janelanotepad-webcore").animate(
        200,
        function () {
            $(this).hide();
            $("#prognotepad-webcore").removeClass("active");
        }
    );
    } else {
    $("#janelanotepad-webcore").show();
    if ($("#janelanotepad-webcore").attr("data-status") == "restaurado") {
        $("#janelanotepad-webcore").animate(
        200,
        function () {
            $("#prognotepad-webcore").addClass("active");
        }
        );
      } else {
        $("#janelanotepad-webcore").animate(
          200,
          function () {
            $("#prognotepad-webcore").addClass("active");
          }
        );
      }
    }
});

//CLICOU NA NOTEPAD FRUTIGER NA BARRA DE TAREFAS
$("#prognotepad-frutiger").click(function () {
    if ($(this).hasClass("active")) {
        $("#janelanotepad-frutiger").animate(
        200,
        function () {
            $(this).hide();
            $("#prognotepad-frutiger").removeClass("active");
        }
    );
    } else {
    $("#janelanotepad-frutiger").show();
    if ($("#janelanotepad-frutiger").attr("data-status") == "restaurado") {
        $("#janelanotepad-frutiger").animate(
        200,
        function () {
            $("#prognotepad-frutiger").addClass("active");
        }
        );
      } else {
        $("#janelanotepad-frutiger").animate(
          200,
          function () {
            $("#prognotepad-frutiger").addClass("active");
          }
        );
      }
    }
});

//CLICOU NA PASTA NA BARRA DE TAREFAS
$("#progpasta").click(function () {
    if ($(this).hasClass("active")) {
        $("#janelapasta").animate(
        200,
        function () {
            $(this).hide();
            $("#progpasta").removeClass("active");
        }
    );
    } else {
    $("#janelapasta").show();
    if ($("#janelapasta").attr("data-status") == "restaurado") {
        $("#janelapasta").animate(
        200,
        function () {
            $("#progpasta").addClass("active");
        }
        );
      } else {
        $("#janelapasta").animate(
          200,
          function () {
            $("#progpasta").addClass("active");
          }
        );
      }
    }
});