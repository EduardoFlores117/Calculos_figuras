// Función para mostrar la alerta de error
function mostrarError(mensaje) {
    alert(mensaje);
}

// Función para validar si la entrada es un número válido
function esNumeroValido(valor) {
    return !isNaN(valor) && valor > 0;
}

// Cálculos para el cuadrado
function calcularCuadrado() {
    const lado = parseFloat(document.getElementById("ladoCuadrado").value);
    
    if (!esNumeroValido(lado)) {
        mostrarError("Por favor, ingrese un número válido para el lado del cuadrado.");
        return;
    }

    const area = lado * lado;
    const perimetro = 4 * lado;
    document.getElementById("resultadoCuadrado").innerHTML = `Área: ${area} <br> Perímetro: ${perimetro}`;

    const cuadradoAnimado = document.getElementById("cuadradoAnimado");
    cuadradoAnimado.style.width = lado + "px";
    cuadradoAnimado.style.height = lado + "px";
    cuadradoAnimado.style.backgroundColor = `hsl(${lado * 10}, 70%, 50%)`;

    actualizarPersonaje("😊 ¡Bien hecho con el cuadrado!");
}

function eliminarCuadrado() {
    document.getElementById("ladoCuadrado").value = '';
    document.getElementById("resultadoCuadrado").innerHTML = '';
    const cuadradoAnimado = document.getElementById("cuadradoAnimado");
    cuadradoAnimado.style.width = "50px";
    cuadradoAnimado.style.height = "50px";
}

// Cálculos para el rectángulo
function calcularRectangulo() {
    const largo = parseFloat(document.getElementById("largoRectangulo").value);
    const ancho = parseFloat(document.getElementById("anchoRectangulo").value);
    
    if (!esNumeroValido(largo)) {
        mostrarError("Por favor, ingrese un número válido para el largo del rectángulo.");
        return;
    }
    if (!esNumeroValido(ancho)) {
        mostrarError("Por favor, ingrese un número válido para el ancho del rectángulo.");
        return;
    }

    const area = largo * ancho;
    const perimetro = 2 * (largo + ancho);
    document.getElementById("resultadoRectangulo").innerHTML = `Área: ${area} <br> Perímetro: ${perimetro}`;

    const rectanguloAnimado = document.getElementById("rectanguloAnimado");
    rectanguloAnimado.style.width = largo + "px";
    rectanguloAnimado.style.height = ancho + "px";
    rectanguloAnimado.style.backgroundColor = `hsl(${largo * 5}, 70%, 50%)`;

    actualizarPersonaje("😊 ¡El rectángulo está listo!");
}

function eliminarRectangulo() {
    document.getElementById("largoRectangulo").value = '';
    document.getElementById("anchoRectangulo").value = '';
    document.getElementById("resultadoRectangulo").innerHTML = '';
    const rectanguloAnimado = document.getElementById("rectanguloAnimado");
    rectanguloAnimado.style.width = "100px";
    rectanguloAnimado.style.height = "50px";
}

// Cálculos para el círculo
function calcularCirculo() {
    const radio = parseFloat(document.getElementById("radioCirculo").value);
    
    if (!esNumeroValido(radio)) {
        mostrarError("Por favor, ingrese un número válido para el radio del círculo.");
        return;
    }

    const area = Math.PI * Math.pow(radio, 2);
    const perimetro = 2 * Math.PI * radio;
    document.getElementById("resultadoCirculo").innerHTML = `Área: ${area.toFixed(2)} <br> Perímetro: ${perimetro.toFixed(2)}`;

    const circuloAnimado = document.getElementById("circuloAnimado");
    circuloAnimado.style.width = radio * 2 + "px";
    circuloAnimado.style.height = radio * 2 + "px";
    circuloAnimado.style.backgroundColor = `hsl(${radio * 10}, 70%, 50%)`;

    actualizarPersonaje("😊 ¡Buen trabajo con el círculo!");
}

function eliminarCirculo() {
    document.getElementById("radioCirculo").value = '';
    document.getElementById("resultadoCirculo").innerHTML = '';
    const circuloAnimado = document.getElementById("circuloAnimado");
    circuloAnimado.style.width = "50px";
    circuloAnimado.style.height = "50px";
}

// Cálculos para el triángulo
function calcularTriangulo() {
    const base = parseFloat(document.getElementById("baseTriangulo").value);
    const altura = parseFloat(document.getElementById("alturaTriangulo").value);
    const lado1 = parseFloat(document.getElementById("lado1Triangulo").value);
    const lado2 = parseFloat(document.getElementById("lado2Triangulo").value);
    
    if (!esNumeroValido(base)) {
        mostrarError("Por favor, ingrese un número válido para la base del triángulo.");
        return;
    }
    if (!esNumeroValido(altura)) {
        mostrarError("Por favor, ingrese un número válido para la altura del triángulo.");
        return;
    }
    if (!esNumeroValido(lado1)) {
        mostrarError("Por favor, ingrese un número válido para el lado 1 del triángulo.");
        return;
    }
    if (!esNumeroValido(lado2)) {
        mostrarError("Por favor, ingrese un número válido para el lado 2 del triángulo.");
        return;
    }

    const area = (base * altura) / 2;
    const perimetro = base + lado1 + lado2;
    document.getElementById("resultadoTriangulo").innerHTML = `Área: ${area.toFixed(2)} <br> Perímetro: ${perimetro.toFixed(2)}`;

    const trianguloAnimado = document.getElementById("trianguloAnimado");
    trianguloAnimado.style.borderBottomWidth = altura + "px";
    trianguloAnimado.style.borderLeftWidth = base / 2 + "px";
    trianguloAnimado.style.borderRightWidth = base / 2 + "px";
    trianguloAnimado.style.borderBottomColor = `hsl(${base * 10}, 70%, 50%)`;

    actualizarPersonaje("😊 ¡Lo hiciste! Triángulo completado.");
}

function eliminarTriangulo() {
    document.getElementById("baseTriangulo").value = '';
    document.getElementById("alturaTriangulo").value = '';
    document.getElementById("lado1Triangulo").value = '';
    document.getElementById("lado2Triangulo").value = '';
    document.getElementById("resultadoTriangulo").innerHTML = '';
    const trianguloAnimado = document.getElementById("trianguloAnimado");
    trianguloAnimado.style.borderBottomWidth = "100px";
    trianguloAnimado.style.borderLeftWidth = "50px";
    trianguloAnimado.style.borderRightWidth = "50px";
}

function actualizarPersonaje(mensaje) {
    document.getElementById("personaje").innerHTML = mensaje;
}