import { Injectable } from '@angular/core';
import { Juguete } from './juguetes'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Juguete[] = [
    {
      nombre: "Auto De Carrera A Radio Control Usb Luz Y Humo",
      descripcion: "Escala: 1:20, Tracción: 4x2, Material: PVC, Alcance: 10m, Batería de litio: 3.7v 500 mAh, Batería Recargable",
      precio: 11199,
      foto: "../assets/auto.png"
    },
    {
      nombre: "Cocinita De Juguete Cocina De Madera Infantil Juego Chicos",
      descripcion: "Estructura realizada en madera Fibrofacil de 5,5mm super resistente. INCLUYE BACHA DE ACERO INOXIDABLE, TODAS LAS PUERTAS SE ABREN Y SE CIERRAN, Viene con accesorios: 2 platitos, una tablita, cuchillo, tenedor, espátula y cuchara, Bordes redondeados para cuidar y proteger a los chicos",
      precio: 
      8399,
      foto: "../assets/cocinita.png"
    },
    {
      nombre: "Juguete Cactus Luminoso Baila Canta Y Repite Voz Tik Tok Pel",
      descripcion: "EL JUGUETE MÁS BUSCADO DE TIKTOK ¡NUEVOS DISEÑOS! El nuevo juguete cactus bailarín es tendencia en Tik Tok por su capacidad de llamar la atención de los chicos bailando, cantando y repitiendo lo que le digas. Gracias a sus funciones estimula de una manera divertida el aprendizaje del habla y del lenguaje de los niños. BATERÍA RECARGABLE - CARGA USB, El Cactus incluye el cable USB para realizar la carga desde una computadora o utilizando un cargador universal de teléfono. A diferencia de otras versiones esta incorpora baterías recargables de manera interna. Siendo así, más seguro para los chicos y ahorrándote dinero considerablemente al no usar las pilas tradicionales. IMPORTANTE: Si utiliza un cargador de celular debe ser de carga lenta (5v 1a)",
      precio: 5950,
      foto: "../assets/cactus.png"
    },
    {
      nombre: "50 Dinosaurios de goma 5 Cm Juguete Premium Pack",
      descripcion: "DINOSAURIOS DE GOMA PACK DE 50, COLORES SURTIDOS, MATERIAL: GOMA, TAMAÑO APROXIMADO: 5 CM , Velociraptor, Gallimimo, Diplodocus, Espinosaurio, Braquiosaurio, Parasaurolofus, Estiracosaurio, Triceratops, Stegosaurus, T.Rex",
      precio: 4390,
      foto: "../assets/dinosaurios.png"
    },
    {
      nombre: "Pista Dinosaur Track Orbital Auto Electrica 240 Piezas",
      descripcion: "Crea tu propia carrera temática de dinosaurios: combinación flexible y variedades de formas de jugar. Ejercita la coordinación ojo-mano y la percepción del color. Incluye 240 piezas de pista de carreras flexibles, 1 coche de juguete, 6 modelos de dinosaurio, 4 árboles, 2 cabezas de dinosaurio y 4 pendient, Desarrolla la coordinación ojo-mano del niño, las habilidades de pensamiento lógico y la creatividad. Fácil de montar o desmontar, tiene una gran flexibilidad cuando toda la pista está unida. Crea nuevos diseños de pista para diferentes combinaciones: pendientes, puentes, tocadiscos, etc., No tóxico y seguro: hecho de material ABS de alta calidad que es ecológico y duradero, absolutamente seguro para los niños. El coche de carreras requiere 1 pila AA (no incluida).",
      precio: 10999,
      foto: "../assets/pista de dinosaurios.png"
    },
    {
      nombre: 'Juego Antiestres Pop It Multicolor burbujas silicona figuras',
      descripcion: 'JUGUETE ANTI STRESS POP IT, Para reducir el estrés y la ansiedad. Es un juguete saludable, duradero y lavable está hecho de silicona de alta calidad, no tóxico e inodoro, libre de BPA y se puede reutilizar y limpiar durante un largo período de tiempo. Ideal para niños y adultos. El Pop It es un juguete especialmente indicado y adaptado para niños con patologías como Autismo, Trastornos de Déficit de Atención e Hiperactividad (TDAH), problemas de concentración, problemas de desarrollo de habilidades motoras y discapacidad intelectual.',
      precio: 1600,
      foto: '../assets/antiestres.png'
    },
    {
      nombre: 'Valija Juliana Maquillaje Artistico Grande Pinturitas Full',
      descripcion: 'Valija Juliana Maquillaje Artistico Grande FULL, Ancho: 25 cm. Altura sin sumar la manija: 17 cm. Altura sumando la manija: 20 cm. Profundidad: 8 cm, Contiene: Espejo de plástico, Stickers para decorar, Lápiz de labios, Extensiones de cabello, Libro de ideas, Pinturas al agua, Esponjas, Brillitos, Hebillas para el, ',
      precio: 6150,
      foto: '../assets/valijita.png'
    }
  ];

  constructor() { }

  getProductos(){
    return this.productos;
  }

  getProducto(idx:number){
    return this.productos[idx];
  }

}
