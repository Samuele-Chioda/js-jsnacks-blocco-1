const invitati = ["john", "Marco", "Elisa", "Ronnie", "Travis"];
let nomeInvitato=prompt("Inserisci il tuo nome da invitato");

if (invitati.includes(nomeInvitato)) {
    console.log("Benvenuto alla festa!");
} else {
    console.log("Non sei stato invitato alla festa.");
}