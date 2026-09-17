// 1. Förberedelser (Sätt upp spelplanen)
// Bestäm hur stort brädet ska vara
let size = 8;

// Hämta ett "tomt papper" där vi kan rita brädet
let board = "";


// 2. Skapa raderna (Upprepa 'size' gånger uppifrån och ner)
for (let y = 0; y < size; y++) {

    // 3. Skapa kolumnerna (Upprepa 'size' gånger från vänster till höger)
    for (let x = 0; x < size; x++) {

        // Regeln: Lägg ihop numret för raden (y) och kolumnen (x)
        // Är summan ett jämnt tal? (Delbart med 2 med 0 i rest)
        if ((x + y) % 2 === 0) {

            // Om jämnt: Rita ett mellanslag
            board += " ";

        } else {

            // Om udda: Rita en brädgård
            board += "#";

        }
    }

    // 4. Avsluta raden
    // När inre loopen är klar med raden, gör en radbrytning (tryck "Enter")
    board += "\n";
}


// 5. Visa resultatet
// När alla loopar har snurrat klart, visa hela pappret på skärmen
console.log(board);
