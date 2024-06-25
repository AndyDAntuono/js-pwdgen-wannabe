//PERMETTO L'INSERIMENTO DEL NOME DA PARTE DELL'UTENT
let first_name = prompt("insrisci il tuo nome");
console.log(first_name);

//PEMETTO L'INSERIMENTO DEL COGNOME DA PARTE DELL'UTENTE
let last_name = prompt ("inserisci il cognome");
console.log(last_name);

//PERMETTO LINSERIMENTO DEL COLORE DA PARTE DELL'UTENTE
let color = prompt("inserisci il tuo colore preferito");
console.log(color);

//CREO UNA VARIABILE A CUI ASSEGNO LA CONCATENAZIONE DEI VALORI INSERITI PRECEDENTEMENTE CON IL VALORE 23
let string = `${first_name}${last_name}${color}23`;
console.log(string)

//RECUPERO L'ELEMENTO HTML PREPOSTO AL CONTENIMENTO DELLA STRINGA GENERATA E GLI ASSEGGNO IL VALORE
document.getElementById("pwd").innerText = string;