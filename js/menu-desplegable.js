// Menú desplegable 
$(document).ready(menu);


var contador = 1;

function menu() {
    $("#iconoMenu2").click(function() {
        
        if (contador == 0) {
            $("#menu").animate({
                left:"-100%"
            });
            contador = 1;
        }else{
            $("#menu").animate({
                left:"0"
            },"slow");
            
            contador = 0;
        }
    });
    
}

// Selecciona los botones del menú

// Informacion
$("#btn-info").click(function() {
    $("#menu").animate({
        left:"-100%"
    },"slow")

    contador = 1;
});




// Brownies
// $("#btn-brownies").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")

//     contador = 1;
// });

// // Bombas
// $("#btn-bombas").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")
    
//     contador = 1;
// })

// // Clásicos
// $("#btn-clasicas").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")
    
//     contador = 1;
// })


// // Letter
// $("#btn-letter").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")
    
//     contador = 1;
// })

// // varios
// $("#btn-varios").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")
    
//     contador = 1;
// })


// //shots
// $("#btn-shots").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")
    
//     contador = 1;
// })


// // Desayunos
// $("#btn-desayunos").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")
    
//     contador = 1;
// })


// // Box's
// $("#btn-box").click(function() {
//     $("#menu").animate({
//         left:"-100%"
//     },"slow")
    
//     contador = 1;
// });