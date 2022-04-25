function funkcijaPalindrom()
{
    var uneseniTekst=document.getElementById("uneseniTekst").value;
    if(uneseniTekst == ""){document.getElementById("Ispis").value="Morate unijeti tekst"; return; }
    var slova = uneseniTekst.replace(/[^a-z]/gi, '').toLowerCase();
    if(slova == ""){document.getElementById("Ispis").value="Morate unijeti barem jedno slovo"; return;}
    var obrnuto=slova.split("").reverse().join("");
    if(slova == obrnuto){document.getElementById("Ispis").value="Palindrom"}
    else{document.getElementById("Ispis").value="Nije palindrom"}
}