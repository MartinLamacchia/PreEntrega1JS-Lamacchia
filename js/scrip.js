

alert("Bienvenido/a al tu Tienda Connection");

let nombre_usuario = prompt("¿Cual es tu nombre?");

alert("Hola " + nombre_usuario + " indicanos que queres hacer.");

let programas_usuario = prompt("1)Descuentos\n 2)Lista de Compras\n 3)Sorteos\n 4)Comprar Producto\n SALIR");


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

        let producto_consumidor = [];

        function lista_productos() {

            class Producto {
                constructor(nombre, cantidad) {
                    this.nombre = nombre;
                    this.cantidad = cantidad;
                }

                get_datos() {
                    console.log("Producto: ", this.nombre);
                    console.log("Cantidad: ", this.cantidad);
                    console.log(" ");
                }


            }

            for (let i = 0; i < 20; i++) {

                let nombre = prompt("Indique el producto que quiere agregar a la lista \no SALIR si no quiere agregar mas productos a la lista");
                if (nombre.toLocaleLowerCase() == "salir") {
                    alert("LISTADO FINALIZADO");
                    break;
                }
                let cantidad = parseInt(prompt("Ingrese cuantas unidades de " + nombre + " quiere poner al listado"));
                let nuevo_producto = new Producto(nombre, cantidad);
                producto_consumidor.push(nuevo_producto);

            }

            for (let producto of producto_consumidor) {

                producto.get_datos();

            };

        }

        lista_productos();

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

        //INCLUYE PRODUCTOS AL ARRAY
        class Producto {

            constructor(producto, precio) {

                this.producto = producto;
                this.precio = precio;

            }

            get_datos() {

                console.log("Producto: ", this.producto);
                console.log("Precio: ", this.precio);
                console.log("");

            }
        }

        // FUNCION PARA CALCULAR EL IVA DEL PRODUCTO DE UNA LISTA DE PRODUCTOS
        function calcular_iva(productoSeleccionadoPrecio) {
            return productoSeleccionadoPrecio = productoSeleccionadoPrecio + (productoSeleccionadoPrecio * 0.21);
        }

        // FUNCION PARA CALCULAR LAS CUOTAS DEL PRODUCTO DE UNA LISTA DE PRODUCTOS
        function calcular_cuotas(productoSeleccionadoPrecio, cuotas) {

            if (cuotas == 3) {
                return cuotas = productoSeleccionadoPrecio + (productoSeleccionadoPrecio * 0.07);
            } else if (cuotas == 6) {
                return cuotas = productoSeleccionadoPrecio + (productoSeleccionadoPrecio * 0.14);
            } else if (cuotas == 9) {
                return cuotas = productoSeleccionadoPrecio + (productoSeleccionadoPrecio * 0.19);
            } else if (cuotas == 12) {
                return cuotas = productoSeleccionadoPrecio + (productoSeleccionadoPrecio * 0.25);
            } else if (cuotas == 0) {
                return cuotas = productoSeleccionadoPrecio;
            } else {
                alert("Las cuotas elegidas no estan en el sistema");
            }

        }

        let lista_productos = [
            {
                producto: "Televisor",
                precio: 49500,
            },
            {
                producto: "Computadora Samsung",
                precio: 98000,
            },
            {
                producto: "Computadora Lenovo",
                precio: 100000,
            },
            {
                producto: "Computadora MAC",
                precio: 150000,
            },
            {
                producto: "Aire Acondicionado",
                precio: 80000,
            },
            {
                producto: "Lavarropas",
                precio: 60000,
            },
        ];
        
        
        let producto_compra = prompt("Si quiere ver la lista de comprar ingrese LISTA\n Si quiere ingresar un nuevo producto ingrese NUEVO\n Si desea comprar un producto ingrese COMPRAR\n Si quiere salir indique SALIR");
        
        do {


            while (producto_compra.toLocaleLowerCase() == "lista") {
        
        
                for (let producto of lista_productos) {
        
                    console.log("Producto: ", producto.producto, "\nPrecio: ", producto.precio, "\n ");
        
                }
        
                producto_compra = prompt("Si quiere ver la lista de comprar ingrese LISTA\n Si quiere ingresar un nuevo producto ingrese NUEVO\n Si desea comprar un producto ingrese COMPRAR\n Si quiere salir indique SALIR");
        
            }
        
            while (producto_compra.toLocaleLowerCase() == "nuevo") {
        
                let producto = prompt("Ingrese un nuevo producto al listado");
                let precio = parseInt(prompt("Ingrese el precio del producto"))
        
                let nuevo_producto = new Producto(producto, precio);
                lista_productos.push(nuevo_producto);
        
                producto_compra = prompt("Si quiere ver la lista de comprar ingrese LISTA\n Si quiere ingresar un nuevo producto ingrese NUEVO\n Si desea comprar un producto ingrese COMPRAR\n Si quiere salir indique SALIR");
                break;
        
            }
        
            while (producto_compra.toLocaleLowerCase() == "comprar") {
        
        
                let producto_elegido = prompt("¿Cual es el producto del listado que quiere comprar?");
        
                let productoSeleccionado = lista_productos.find((producto) => producto.producto == producto_elegido);
        
                let productoSeleccionadoPrecio = productoSeleccionado.precio
        
                let cuotas = prompt("¿Quiere pagar en cuotas? \n Puede elegir pagar en 3 - 6 - 9 - 12 cuotas con interes");
        
                alert(nombre_usuario + " el " + productoSeleccionado.producto + " cuesta $" + productoSeleccionadoPrecio + "\nInclyuendo el IVA le quedaria en $" + (calcular_iva(productoSeleccionadoPrecio)) + "\nPagando en " + cuotas + " cuotas el costo total del producto es $" + (calcular_cuotas(productoSeleccionadoPrecio, cuotas) + calcular_iva(productoSeleccionadoPrecio)) + "\nEl total por que debera pagar por mes es $" + ((calcular_cuotas(productoSeleccionadoPrecio, cuotas) + calcular_iva(productoSeleccionadoPrecio)) / cuotas));
        
                producto_compra = prompt("Si quiere ver la lista de comprar ingrese LISTA\n Si quiere ingresar un nuevo producto ingrese NUEVO\n Si desea comprar un producto ingrese COMPRAR\n Si quiere salir indique SALIR");
        
            }
        
        } while (producto_compra.toLocaleLowerCase() == "lista" || producto_compra.toLocaleLowerCase() == "nuevo" || producto_compra.toLocaleLowerCase() == "comprar");
        
        programas_usuario = prompt("¿Desea seguir utilizando el programa? \n1)Descuentos \n2)Lista de Compras \n3)Sorteos \n4)Comprar Producto \n\nSi quiere salir del programa Comprar Producto ingresar \n\"SALIR\"");
        
    }

    programas_usuario = prompt("¿Desea seguir utilizando el programa? \n1)Descuentos \n2)Lista de Compras \n3)Sorteos \n4)Comprar Producto \n\nSi quiere salir del programa ingresar \n\"SALIR\"");

}

alert("\"TERMINA EL PROGRAMA\"");


