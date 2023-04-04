const productos = [
  {
    id: "000001",
    nombre: "ganoderma lucidum",
    tipoDeProducto: "tintura",
    category: "alcoholaturas",
    presentacion: "50Ml",
    importe: 1000,
    imagen: "./goteros.jpg",
    descripcion:
      "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML.",
  },
  {
    id: "000002",
    nombre: "hericium erinaceum",
    tipoDeProducto: "tintura",
    category: "alcoholaturas",
    presentacion: "50Ml",
    importe: 1000,
    imagen: "./goteros.jpg",
    descripcion:
      "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML.",
  },
  {
    id: "000003",
    nombre: "cordiceps militaris",
    tipoDeProducto: "tintura",
    category: "alcoholaturas",
    presentacion: "50Ml",
    importe: 1000,
    imagen: "./goteros.jpg",
    descripcion:
      "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML.",
  },
  {
    id: "000004",
    nombre: "ganoderma lucidum",
    tipoDeProducto: "setas",
    category: "comestibles",
    presentacion: "1 Kg.",
    importe: 1000,
    imagen: "./setas disecadas.jpg",
    descripcion:
      "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad.",
  },
  {
    id: "000005",
    nombre: "hericium erinaceum",
    tipoDeProducto: "setas",
    category: "comestibles",
    presentacion: "1 kg.",
    importe: 1000,
    imagen: "./setas disecadas.jpg",
    descripcion:
      "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad.",
  },
  {
    id: "000006",
    nombre: "cordiceps militaris",
    tipoDeProducto: "setas",
    category: "comestibles",
    presentacion: "1 kg.",
    importe: 1000,
    imagen: "./setas disecadas.jpg",
    descripcion:
      "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad.",
  },
  {
    id: "000007",
    nombre: "ganoderma lucidum",
    tipoDeProducto: "cultura liquida",
    category: "propagacion",
    presentacion: "10 ml.",
    importe: 1000,
    imagen: "./Liquid culture.jpg",
    descripcion:
      "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV.",
  },
  {
    id: "000008",
    nombre: "hericium erinaceum",
    tipoDeProducto: "cultura liquida",
    category: "propagacion",
    presentacion: "10 ml.",
    importe: 1000,
    imagen: "./Liquid culture.jpg",
    descripcion:
      "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV.",
  },
  {
    id: "000009",
    nombre: "cordiceps militaris",
    tipoDeProducto: "cultura liquida",
    category: "propagacion",
    presentacion: "10 ml.",
    importe: 1000,
    imagen: "./Liquid culture.jpg",
    descripcion:
      "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV.",
  },
  {
    id: "000010",
    nombre: "ganoderma lucidum",
    tipoDeProducto: "placas petri",
    category: "propagacion",
    presentacion: "90x90",
    importe: 1000,
    imagen: "./placa petri 1.jpg",
    descripcion:
      "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos.",
  },
  {
    id: "000011",
    nombre: "hericium erinaceum",
    tipoDeProducto: "placas petri",
    category: "propagacion",
    presentacion: "90x90",
    importe: 1000,
    imagen: "./placa petri 1.jpg",
    descripcion:
      "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos.",
  },
  {
    id: "000012",
    nombre: "cordiceps miitaris",
    tipoDeProducto: "placas petri",
    category: "propagacion",
    presentacion: "90x90",
    importe: 1000,
    imagen: "./placa petri 1.jpg",
    descripcion:
      "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos.",
  },
  {
    id: "000013",
    nombre: "ganoderma lucidum",
    tipoDeProducto: "grain spawn",
    category: "propagacion",
    presentacion: "1 Kg.",
    importe: 1000,
    imagen: "./grain spawn.jpg",
    descripcion:
      "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo.",
  },
  {
    id: "000014",
    nombre: "hericium erinaceum",
    tipoDeProducto: "grain spawn",
    category: "propagacion",
    presentacion: "1 Kg.",
    importe: 1000,
    imagen: "./grain spawn.jpg",
    descripcion:
      "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo.",
  },
  {
    id: "000015",
    nombre: "cordiceps militaris",
    tipoDeProducto: "grain spawn",
    category: "propagacion",
    presentacion: "1 Kg.",
    importe: 1000,
    imagen: "./grain spawn.jpg",
    descripcion:
      "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo.",
  },
];

const getProduct = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    if (!error) {
      resolve(productos);
    } else {
      reject("Base de datos no encontrada");
    }
  });
};

export default getProduct;
