import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies(){
    return [{
  title: "El Padrino",
  year: 1972,
  description: "La historia de la familia Corleone, una de las más poderosas familias mafiosas de Nueva York, y su lucha por mantener su imperio en medio de traiciones y conflictos internos.",
},{
  title: "Forrest Gump",
  year: 1994,
  description: "La vida de Forrest Gump, un hombre con una inteligencia limitada pero con un corazón enorme, que se convierte en testigo y protagonista de algunos de los eventos más importantes de la historia de Estados Unidos."
},{
  title: "Inception",
  year: 2010,
  description: "Un ladrón especializado en robar secretos a través del uso de la tecnología de los sueños es contratado para implantar una idea en la mente de un objetivo, pero las cosas se complican cuando su propia mente comienza a desmoronarse."
}, 
{
  title: "The Dark Knight",
  year: 2008,
  description: "Batman se enfrenta a su mayor desafío cuando el Joker, un criminal psicópata, comienza a aterrorizar Gotham City con una serie de crímenes cada vez más violentos y caóticos."
},
{
  title: "Pulp Fiction",
  year: 1994,
  description: "Varias historias entrelazadas de criminales en Los Ángeles, que incluyen a dos sicarios, un boxeador, una pareja de ladrones y una mujer que busca venganza."
},
{
  title: "The Shawshank Redemption",
  year: 1994,
  description: "La historia de Andy Dufresne, un banquero condenado a cadena perpetua por un crimen que no cometió, y su amistad con Red, un preso veterano, mientras luchan por sobrevivir en la brutal prisión de Shawshank."
},{
  title: "The Godfather: Part II",
  year: 1974,
  description: "La continuación de la saga de la familia Corleone, que explora tanto el ascenso al poder de Vito Corleone en la década de 1920 como la lucha de su hijo Michael por mantener el imperio familiar en la década de 1950."
},
{
  title: "Fight Club",
  year: 1999,
  description: "Un hombre insomne y descontento con su vida forma un club de lucha clandestino con un vendedor de jabón carismático, lo que lleva a una serie de eventos que desafían las normas sociales y cuestionan la identidad."
},  {
  title: "The Matrix",
  year: 1999,
  description: "Un hacker descubre que la realidad que conoce es en realidad una simulación creada por máquinas inteligentes, y se une a un grupo de rebeldes para luchar por la libertad de la humanidad."
},{
  title: "Interstellar",
  year: 2014,
  description: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad, enfrentándose a desafíos tanto físicos como emocionales en su misión."
} ];
}
}
