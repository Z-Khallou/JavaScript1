// Hämta rutan från HTML-koden
const skarmRuta = document.getElementById("triangel-ruta");

let hashtag = ""; // Börja med en helt tom text

for (let i = 1; i < 8; i++) {
  hashtag = hashtag + "#"; // Lägg till ett tecken i texten

  // Istället för console.log, tryck in texten på skärmen.
  // \n gör en radbrytning så att nästa rad hamnar under.
  skarmRuta.innerText += hashtag + "\n";
}