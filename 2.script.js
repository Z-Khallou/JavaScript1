for (let i = 1; i <= 100; i++) {
    let output = ""; // 1. Skapa en helt tom text i början av varje varv

    if (i % 3 === 0) {
        output += "Fizz"; // 2. Klistra in "Fizz" om talet är delbart med 3
    }

    if (i % 5 === 0) {
        output += "Buzz"; // 3. Klistra in "Buzz" efteråt om talet är delbart med 5
    }

    // 4. Skriv ut texten. Om texten fortfarande är tom, skriv ut siffran istället.
    console.log(output || i);
}
