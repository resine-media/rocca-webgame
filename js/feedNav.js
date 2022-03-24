function n(n){
  m = n+1
  return m > 9 ? "" + m: "0" + m;
}

const
  ulMenu = document.getElementById("pi-list"),
  sceneWrapper = document.getElementById('scene'),
  mapdiv = document.getElementById('map')
;

Rocca_Data.forEach( function(item, i) {
  let
    listItem = document.createElement("li"),
    button   = document.createElement("button"),
    poiNum   = document.createElement("span"),
    title    = document.createElement("span")
  ;
  // spans
  poiNum.innerHTML = "POI - "+n(i)+" : ";
  title.innerHTML  = item.title;

  button.id      = "menu_pi-"+n(i);
  button.onclick = function(e) {
    toggleScene();
  };
  button.appendChild(poiNum);
  button.appendChild(title);
  listItem.appendChild(button);
  ulMenu.appendChild(listItem);
});
