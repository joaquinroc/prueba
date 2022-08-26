let productos = [
  ["Cafe", "800"],
  ["Yerba", "350"],
  ["Platos", "250"],
  ["Alfajor", "150"],
  ["Tazas", "425"],
  ["Pelota futbol", "1500"],
  ["Chocolate", "1725"],
  ["Té", "225"],
  ["Mani", "160"],
  ["Leche", "220"],
  ["Galletitas", "200"],
  ["Tostadas", "370"],
  ["Azucar", "215"],
  ["Cuchillo", "175"],
  ["Tenedor", "175"],
  ["Papel Higienico", "260"],
];

//console.log(productos);
function consultas(str) {
  let mayor = [];
  mayor.push(productos[0]);
  console.log(mayor);
  let menor = [];
  menor.push(productos[0]);

  if (str === "listado") {
    console.log(productos);
  } else if (str === "mayorprecio") {
    for (let i = 0; i < productos.length; i++) {
      if (Number(mayor[0][1]) < Number(productos[i][1])) {
        mayor = [productos[i]];
      } else if (mayor[0][1] == productos[i[1]]) {
        console.log("hola");
        mayor.push(productos[i]);
      }
    }
   // console.log(mayor);
  } else if (str === "menorprecio") {
    for (let i = 0; i < productos.length; i++) {
      if (Number(menor[0][1]) > Number(productos[i][1])) {
        menor = [productos[i]];
      } else if (menor[0][1] == productos[i][1]) {
        menor.push(productos[i]);
      }
    }
   // console.log(menor);
  }
}

//consultas('mayorprecio')




function eliminar(str) {
   
    let aux = [];

    for(let i = 0 ; i < productos.length; i++){
        if(productos[i][0] !== str) {
            aux.push(productos[i][0])
        }
}
    productos = aux;
}


console.log(eliminar('Cafe'));
function agregar() {}
