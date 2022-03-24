// Donnees de notre application
const
// ****** Permets de bloquer la vue sur draguignan
bounds = [
  [6.45966, 43.53057], // South-west coordinates
  [6.47506, 43.54397]  // North-east coordinates
],

// ***** Nos POI et leurs localisations *****
// attention les index commencent a zero
Rocca_Data = [
  { title: "place du marche",     loc: [6.465301, 43.538439 ] },
  { title: "porte aurenge",       loc: [6.46469 , 43.538741 ] },
  { title: "Eglise ST michel",    loc: [6.465057, 43.539110  ] },
  { title: "Maison Medievale",    loc: [6.465089, 43.539938 ] },
  { title: "portaiguieres",       loc: [6.465524, 43.540734 ] },
  { title: "Maison du bourreau",  loc: [6.466337, 43.540160  ] },
  { title: "Tour de l'horloge",   loc: [6.466382, 43.539936 ] },
  { title: "chapelle st sauveur", loc: [6.466473, 43.539515 ] },
  { title: "jardin Beatrice de provence", loc: [6.466063, 43.539256 ] },
  { title: "porte rommaine",      loc: [6.466310, 43.538809 ] },
],

// ce tableau sert juste a tracer la ligne entre les POI
Rocca_Path = [
  Rocca_Data[0].loc, // POI 1
  Rocca_Data[1].loc, // POI 2
  [6.464348, 43.538968],
  [6.464353, 43.539283],
  [6.464653, 43.539277],
  Rocca_Data[2].loc, // POI 3
  [6.465176, 43.53931 ],
  [6.464801, 43.53954 ],
  Rocca_Data[3].loc, // POI 4
  [6.464785, 43.53961 ],
  [6.46449, 43.539719],
  [6.464865, 43.54029 ],
  [6.465292, 43.540788],
  Rocca_Data[4].loc, // POI 5
  [ 6.465606, 43.540646],
  [ 6.465952, 43.54044,],
  [ 6.46567, 43.540148],
  [ 6.465453, 43.539962],
  [ 6.465579, 43.539826],
  [ 6.46575, 43.539958],
  [ 6.465928, 43.540238],
  [ 6.466239, 43.540413],
  [ 6.466392, 43.540409],
  Rocca_Data[5].loc, // POI  6
  Rocca_Data[6].loc, // POI  7
  Rocca_Data[7].loc, // POI  8
  Rocca_Data[8].loc, // POI  9
  Rocca_Data[9].loc  // POI 10
];

/* Fonction de Mise en forme (genere un tableau de Features)
 * (Feature est une classe geojson qui permets de definir un element de carte)
*/
function generateFeats(list) {
  let feats = [];
  list.forEach( function(item, index) {
    feats.push( Object.assign( {
      'type' :       'Feature',
      'geometry' :   {
        'type' : 'Point',
        'coordinates': item.loc
      },
      'properties' : {
        'title': item.title,
        'description': item.title
      }
    }) )
  });
  return feats;
}