const productos = [{ código: "SN",  nombre: "Silla Nordica", precio: 100, medidas: "Alto: 90cm, Ancho: 60cm, Largo: 60cm" },
                  {  código: "SI",  nombre: "Silla Indutrial", precio: 120,  medidas: "Alto: 90cm, Ancho: 50cm, Largo: 60cm" },
                  {  código: "SP",  nombre: "Silla de Pino" , precio: 80, medidas: "Alto: 80cm, Ancho: 50cm, Largo: 50cm"},
                  {  código: "MR",  nombre: "Mesa Comedor Nórdica"  , precio: 250, medidas: "Alto: 80cm, Ancho: 80cm, Largo: 120cm"},
                  {  código: "MI",  nombre: "Mesa Industrial" , precio: 270, medidas: "Alto: 80cm, Ancho: 80cm, Largo: 140cm"},
                  {  código: "MP",  nombre: "Mesa de Pino" , precio: 230, medidas: "Alto: 80cm, Ancho: 80cm, Largo: 120cm"}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h3> ${producto.nombre}</h3>
                            <p>  Código: ${producto.código}</p>
                            <p>  Medidas: ${producto.medidas}</p>
                            <b> Precio: $ ${producto.precio}</b>
                            <p><a href="">Comprar</a></p>`;
    document.body.appendChild(contenedor);
}

