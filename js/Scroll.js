

// Scroll de los botones

var ventana_ancho = $(window).innerWidth();


// Productos


// Brownies
var Brownies =$(".Brownies").offset().top;

$("#btn-brownies").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Brownies},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:Brownies -50})
    }else if (ventana_ancho<1000 && ventana_ancho >=280) {
        $("html, body").animate({scrollTop:Brownies+20},500);   
    };
})







//Bombas
var Bombas =$(".Bombas").offset().top;

$("#btn-bombas").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Bombas},500);  

    }else if (ventana_ancho<1200 && ventana_ancho >=200) {
        $("html, body").animate({scrollTop:Bombas},500);

    // }else if (ventana_ancho<1000 && ventana_ancho >=360) {
    //     $("html, body").animate({scrollTop:Bombas+10},500); 

    // }else if (ventana_ancho<360 && ventana_ancho >=200) {
    //     $("html, body").animate({scrollTop:Bombas-40},500);   
    };
})


//Corazones
var Corazones =$(".Corazones").offset().top;


$("#btn-corazon").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop: Corazones},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop: Corazones -100},500)
    }else if (ventana_ancho<1000 && ventana_ancho >=280) {
        $("html, body").animate({scrollTop: Corazones+20},500);   
    };
})


//Clasicos 
var Clasicos =$(".Clasicos").offset().top;

$("#btn-clasicas").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Clasicos},500);

    }else if (ventana_ancho<1200 && ventana_ancho >=360) {
        $("html, body").animate({scrollTop:Clasicos},500);

    }else if (ventana_ancho<360 && ventana_ancho >=200) {
        $("html, body").animate({scrollTop:Clasicos-50},500);   

    // }else if (ventana_ancho<410 && ventana_ancho >=200) {
    //     $("html, body").animate({scrollTop:Clasicos-400},500);   
    };
})



//Letter Cakes
var Letter =$(".Letter").offset().top;

$("#btn-letter").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho <=1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:Letter},800)  
    }else if (ventana_ancho<1000 && ventana_ancho >=200) {
        $("html, body").animate({scrollTop:Letter},500);

    // }else if (ventana_ancho<1000 && ventana_ancho >=400) {
    //     $("html, body").animate({scrollTop:Letter},500);   
    // }
    // else if (ventana_ancho<400 && ventana_ancho >=360) {
    //     $("html, body").animate({scrollTop:Letter-200},500);   
    // }
    // else if (ventana_ancho<360 && ventana_ancho >=280) {
    //     $("html, body").animate({scrollTop:Letter-100},500);   
    };
});


//Varios
var Varios =$(".Varios").offset().top;

$("#btn-varios").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Varios},500)  
    }else if (ventana_ancho<1200 && ventana_ancho >=180) {
        $("html, body").animate({scrollTop:Varios-100},500);
    // }else if (ventana_ancho<1200 && ventana_ancho >=300) {
    //     $("html, body").animate({scrollTop:Varios},500);   
    };
})



//Shots
var Shots =$(".Shots").offset().top;


$("#btn-shots").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Shots},500)  
    }else if (ventana_ancho<1200 && ventana_ancho >=180) {
        $("html, body").animate({scrollTop:Shots},500);
    // }else if (ventana_ancho<1200 && ventana_ancho >=300) {
    //     $("html, body").animate({scrollTop:Shots},500);   
    };
})


//Desayunos
var Desayunos =$(".Desayunos").offset().top;


$("#btn-desayunos").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Desayunos},500)  
    }else if (ventana_ancho<1200 && ventana_ancho >=180) {
        $("html, body").animate({scrollTop:Desayunos},500);
    // }else if (ventana_ancho<1200 && ventana_ancho >=300) {
    //     $("html, body").animate({scrollTop:Desayunos-20},500);   
    };
})


//Boxs
var Boxs =$(".Boxs").offset().top;

$("#btn-box").on("click",function(e){
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Boxs},500)  
    }else if (ventana_ancho<1000 && ventana_ancho >=180) {
        $("html, body").animate({scrollTop:Boxs},500);
    // }else if (ventana_ancho<1000 && ventana_ancho >=700) {
    //     $("html, body").animate({scrollTop:Boxs+50},500);   
    // }
    // else if (ventana_ancho<700 && ventana_ancho >=500) {
    //     $("html, body").animate({scrollTop:Boxs},500);   
    };
});





// Info

var Info =$("#final").offset().top;

$("#btn-info").on("click",function(e) {
    e.preventDefault();
    if (ventana_ancho >=1200) {
        $("html, body").animate({scrollTop:Info},500)
    }else if (ventana_ancho <1200 && ventana_ancho >=1000) {
        $("html, body").animate({scrollTop:Info},500)
    }else if (ventana_ancho<1000 && ventana_ancho >=180) {
        $("html, body").animate({scrollTop:Info},500);   
    };
})