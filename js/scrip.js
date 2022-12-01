

alert("Bienvenido/a al tu Tienda Connection");

let nombre_usuario = prompt("¿Cual es tu nombre?");

alert("Hola " + nombre_usuario + " indicanos que queres hacer.");

let programas_usuario = prompt("1)Descuentos\n 2)Lista de Compras\n 3)Sorteos\n 4)Comprar Producto");


while (programas_usuario.toLocaleLowerCase() != "salir") {
    
    while (programas_usuario == 1 || programas_usuario.toLocaleLowerCase() == "descuentos" && (programas_usuario.toLocaleLowerCase() != "salir")) {
        
        alert("Bienveniado/a " + nombre_usuario + " al sistema de descuentos");
        let descuento_usuario = prompt("Puede elegir un descuento para:\n 1.REMERAS\n 2.PANTALONES\n 3.BUZOS\n 4.CAMPERAS");
        
        if (descuento_usuario == 1 || descuento_usuario.toLocaleLowerCase() == "remeras" || descuento_usuario.toLocaleLowerCase() == "remera") {
            alert(nombre_usuario + " su descuento para remeras es del 20% del total de la compra");
            let descuento_productos = parseFloat(prompt("Indique el total de su compra y le diremos cuanto es"));
            descuento_productos = descuento_productos * 0.20;
            alert("El descuento de la compra sera de: " + descuento_productos);
        } else if (descuento_usuario == 2 || descuento_usuario.toLocaleLowerCase() == "pantalones" || descuento_usuario.toLocaleLowerCase() == "pantalon") {
            alert(nombre_usuario + " su descuento para pantalones es del 30% del total de la compra");
            let descuento_productos = parseFloat(prompt("Indique el total de su compra y le diremos cuanto es"));
            descuento_productos = descuento_productos * 0.30;
            alert("El descuento de la compra sera de: " + descuento_productos);
        } else if (descuento_usuario == 3 || descuento_usuario.toLocaleLowerCase() == "buzo" || descuento_usuario.toLocaleLowerCase() == "buzos") {
            alert(nombre_usuario + " su descuento para buzos es del 40% del total de la compra");
            let descuento_productos = parseFloat(prompt("Indique el total de su compra y le diremos cuanto es"));
            descuento_productos = descuento_productos * 0.40;
            alert("El descuento de la compra sera de: " + descuento_productos);
        } else if (descuento_usuario == 4 || descuento_usuario.toLocaleLowerCase() == "camperas" || descuento_usuario.toLocaleLowerCase() == "campera") {
            alert(nombre_usuario + " su descuento para camperas es del 50% del total de la compra");
            let descuento_productos = parseFloat(prompt("Indique el total de su compra y le diremos cuanto es"));
            descuento_productos = descuento_productos * 0.50;
            alert("El descuento de la compra sera de: " + descuento_productos);
        } else {
            alert("El producto indicado no se encuentra registrado o no tiene descuento");
        }
        
        programas_usuario = prompt("¿Desea seguir utilizando el programa? \n1)Descuentos \n2)Lista de Compras \n3)Sorteos \n4)Comprar Producto \n\nSi quiere salir del programa Descuentos ingresar \n\"SALIR\"");

    }

    while (programas_usuario == 2 || programas_usuario.toLocaleLowerCase() == "lista de compras" || programas_usuario.toLocaleLowerCase() == "lista" && (programas_usuario.toLocaleLowerCase() != "salir")) {
        
        alert("Bienveniado/a " + nombre_usuario + " al sistema de Lista de Compras \n Puede hacer un listado de hasta 20 productos");
        let producto_usuario;
        let cantidad_producto;
        
        for (i = 1; i <= 20; i++) {
            producto_usuario = prompt("Indique el producto que quiere agregar a la lista \no SALIR si no quiere agregar mas productos a la lista");
            if (producto_usuario.toLocaleLowerCase() == "salir") {
                alert("LISTADO FINALIZADO");
                break;
            }
            cantidad_producto = parseInt(prompt("Ingrese cuantas unidades de " + producto_usuario + " quiere poner al listado"));
            listado_usuario = i + " " + producto_usuario + " " + cantidad_producto;
            console.log(listado_usuario);
        }

        programas_usuario = prompt("¿Desea seguir utilizando el programa? \n1)Descuentos \n2)Lista de Compras \n3)Sorteos \n4)Comprar Producto \n\nSi quiere salir del programa Lista de Compras ingresar \n\"SALIR\"");

    }

    while (programas_usuario == 3 || programas_usuario.toLocaleLowerCase() == "sorteos" || programas_usuario.toLocaleLowerCase() == "sorteo" && (programas_usuario.toLocaleLowerCase() != "salir")) {
        
        let edad_usuario = parseInt(prompt("How old are you? \n¿Cual es tu edad?"));
        let idioma = parseInt(prompt("Your language is English enter: 1 \nSu idioma es Español ingrese: 2"));
        
        if (idioma == 1 && edad_usuario >= 18) {
            alert("Welcome " + nombre_usuario + " to our raffle form");
            let direccion_usuario = prompt("In what country do you live?");
            let marca_usuario = prompt("Favorite clothing brand?");
            alert("Hello " + nombre_usuario + " you are already participating for a purchase order in " + marca_usuario + " for " + direccion_usuario);
        } else if (idioma == 2 && edad_usuario >= 18) {
            alert("Bienbenido/a " + nombre_usuario + " a nuestro formulario de sorteo");
            let direccion_usuario = prompt("¿En qué país vives?");
            let marca_usuario = prompt("¿Cual es tu marca favorita?");
            alert("Hola " + nombre_usuario + " ya estás participando por una orden de compra en " + marca_usuario + " para " + direccion_usuario);
        } else {
            alert("WRONG: You are not of the necessary age or your language is not the correct one \nERROR: No tiene la edad necesaria o su idioma no es el corresponde");
        }

        programas_usuario = prompt("¿Desea seguir utilizando el programa? \n1)Descuentos \n2)Lista de Compras \n3)Sorteos \n4)Comprar Producto \n\nSi quiere salir del programa Sorteos ingresar \n\"SALIR\"");


    }

    while (programas_usuario == 4 || programas_usuario.toLocaleLowerCase() == "compras" || programas_usuario.toLocaleLowerCase() == "compra" || programas_usuario.toLocaleLowerCase() == "comprar" || programas_usuario.toLocaleLowerCase() == "comprar producto" && (programas_usuario.toLocaleLowerCase() != "salir")) {

        let televisor_32 = 49500;
        let computadora_sam = 98000;
        let computadora_len = 100000;
        let computadora_mac = 150000;
        let aire_acondicionado = 80000;
        let lavarropas = 60000;

        // FUNCION PARA CALCULAR EL IVA DEL PRODUCTO DE UNA LISTA DE PRODUCTOS
        function calcular_iva(producto_elegido) {
            return producto_elegido = producto_elegido + (producto_elegido * 0.21);
        }


        // FUNCION PARA CALCULAR LAS CUOTAS DEL PRODUCTO DE UNA LISTA DE PRODUCTOS
        function calcular_cuotas(producto_elegido, cuotas) {

            if (cuotas == 3) {
                return cuotas = producto_elegido + (producto_elegido * 0.07);
            } else if (cuotas == 6) {
                return cuotas = producto_elegido + (producto_elegido * 0.14);
            } else if (cuotas == 9) {
                return cuotas = producto_elegido + (producto_elegido * 0.19);
            } else if (cuotas == 12) {
                return cuotas = producto_elegido + (producto_elegido * 0.25);
            } else if (cuotas == 0) {
                return cuotas = producto_elegido;
            } else {
                alert("Las cuotas elegidas no estan en el sistema");
            }

        }


        let producto_compra = prompt("Si desea comprar un producto ingrese COMPRAR \n Si quiere ver la lista de comprar ingrese LISTA");

        while (producto_compra == "LISTA" || producto_compra == "Lista" || producto_compra == "lista") {
            alert("LISTA DE PRODUCTOS\n 1.TELEVISOR 32\"\n 2.COMPUTADORA SAMSUNG\n 3.COMPUTADORA LENOVO\n 4.COMPUTADORA MAC\n 5.AIRE ACONDICIONADO\n 6.LAVARROPAS");
            producto_compra = prompt("Si desea comprar un producto ingrese COMPRAR \n Si quiere ver la lista de comprar ingrese LISTA");
        
            while (producto_compra == "COMPRAR" || producto_compra == "Comprar" || producto_compra == "comprar") {
                let producto_elegido = prompt("¿Cual es el producto que quiere comprar?\n \"INDIQUE EL NUMERO DEL PRODUCTO\"\n El numero de producto lo puede encontrar en la \"LISTA\"");
    
                if (producto_elegido == 1) {
                    alert(nombre_usuario + " el producto que quiere comprar es un televisor de 32\"");
                    producto_elegido = televisor_32;
                } else if (producto_elegido == 2) {
                    alert(nombre_usuario + " el producto que quiere comprar es una computadora Samsung");
                    producto_elegido = computadora_sam;
                } else if (producto_elegido == 3) {
                    alert(nombre_usuario + " el producto que quiere comprar es una computadora Lenovo");
                    producto_elegido = computadora_len;
                } else if (producto_elegido == 4) {
                    alert(nombre_usuario + " el producto que quiere comprar es una computadora MAC");
                    producto_elegido = computadora_mac;
                } else if (producto_elegido == 5) {
                    alert(nombre_usuario + " el producto que quiere comprar es una computadora Aire Acondicionado");
                    producto_elegido = aire_acondicionado;
                } else if (producto_elegido == 6) {
                    alert(nombre_usuario + " el producto que quiere comprar es una computadora Lavarropas");
                    producto_elegido = lavarropas;
                } else {
                    break;
                }
    
                calcular_iva(producto_elegido);
    
                let cuotas = prompt("¿Quiere pagar en cuotas? \n Puede elegir pagar en 3 - 6 - 9 - 12 cuotas con interes");
    
                calcular_cuotas(producto_elegido, cuotas);
    
                if (producto_elegido == televisor_32) {
                    alert(nombre_usuario + " el televisor de 32\" cuesta $" + producto_elegido + "\nInclyuendo el IVA el televisor le quedaria en $" + (calcular_iva(producto_elegido)) + "\nPagando en " + cuotas + " cuotas el costo total del producto es $" + (calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) + "\nEl total por que debera pagar por mes es $" + ((calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) / cuotas));
                } else if (producto_elegido == computadora_sam) {
                    alert(nombre_usuario + " la computadora Samsung cuesta $" + producto_elegido + "\nInclyuendo el IVA el televisor le quedaria en $" + (calcular_iva(producto_elegido)) + "\nPagando en " + cuotas + " cuotas el costo total del producto es $" + (calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) + "\nEl total por que debera pagar por mes es $" + ((calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) / cuotas));
                } else if (producto_elegido == computadora_len) {
                    alert(nombre_usuario + " la computadora Lenovo cuesta $" + producto_elegido + "\nInclyuendo el IVA el televisor le quedaria en $" + (calcular_iva(producto_elegido)) + "\nPagando en " + cuotas + " cuotas el costo total del producto es $" + (calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) + "\nEl total por que debera pagar por mes es $" + ((calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) / cuotas));
                } else if (producto_elegido == computadora_mac) {
                    alert(nombre_usuario + " la computadora MAC cuesta $" + producto_elegido + "\nInclyuendo el IVA el televisor le quedaria en $" + (calcular_iva(producto_elegido)) + "\nPagando en " + cuotas + " cuotas el costo total del producto es $" + (calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) + "\nEl total por que debera pagar por mes es $" + ((calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) / cuotas));
                } else if (producto_elegido == aire_acondicionado) {
                    alert(nombre_usuario + " el aire acondicionado cuesta $" + producto_elegido + "\nInclyuendo el IVA el televisor le quedaria en $" + (calcular_iva(producto_elegido)) + "\nPagando en " + cuotas + " cuotas el costo total del producto es $" + (calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) + "\nEl total por que debera pagar por mes es $" + ((calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) / cuotas));
                } else if (producto_elegido == lavarropas) {
                    alert(nombre_usuario + " el lavarropas cuesta $" + producto_elegido + "\nInclyuendo el IVA el televisor le quedaria en $" + (calcular_iva(producto_elegido)) + "\nPagando en " + cuotas + " cuotas el costo total del producto es $" + (calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) + "\nEl total por que debera pagar por mes es $" + ((calcular_cuotas(producto_elegido, cuotas) + calcular_iva(producto_elegido)) / cuotas));
                }
    
                producto_compra = prompt("Si desea comprar un producto ingrese COMPRAR \nSi quiere ver la lista de comprar ingrese LISTA \nSi quiere salir indique SALIR");

            }
    
            while (producto_compra == "Salir" || producto_compra == "SALIR" || producto_compra == "salir") {
                alert("Muchas gracias por elegirnos " + nombre_usuario + "!!");
                break;
            }
        
        }

        programas_usuario = prompt("¿Desea seguir utilizando el programa? \n1)Descuentos \n2)Lista de Compras \n3)Sorteos \n4)Comprar Producto \n\nSi quiere salir del programa Comprar Producto ingresar \n\"SALIR\"");
    
    }

    programas_usuario = prompt("¿Desea seguir utilizando el programa? \n1)Descuentos \n2)Lista de Compras \n3)Sorteos \n4)Comprar Producto \n\nSi quiere salir del programa ingresar \n\"SALIR\"");

}


alert("\"TERMINA EL PROGRAMA\"");

