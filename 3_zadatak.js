var zastava;
function funkcijaIzracun()
{
var ispis="";
var unos=document.getElementById("uneseniNiz").value;
var niz_brojevi=unos.split(',').map(Number);
var trazeni_broj = document.getElementById("uneseniBroj").value;
var n = niz_brojevi.length;

zastava=false;
let v = [];

var rez = funkcijaRekurzija(niz_brojevi, n,v, trazeni_broj);

if (zastava==true){ispis=rez;}
else{ispis=-1;} //ako nema rjesenja ispisi -1

document.getElementById("Rezultat2").value=ispis;
}

function funkcijaRekurzija(niz_brojevi, n,v, trazeni_broj)
{
    if (trazeni_broj == 0) //uspjesno smo pronasli rjesenje
    {
        zastava=true;
        return v.length;
    }
   
    //ako  smo prosli nulu (nije valjana suma) ili smo dosli do kraja niza,
    //znamo da ova kombinacija nije rjesenje, stoga vracamo veliki broj, kako bi smo bili sigurni
    //da funkcija min() daje potencijalno rješenje
    if (trazeni_broj < 0 || n==0)
        return Number.MAX_VALUE;

    let x = funkcijaRekurzija(niz_brojevi,n - 1, v, trazeni_broj);//kroz niz se ide od zadnjeg prema prvom elementu
   
    v.push(niz_brojevi[n - 1]);
    
    //trazeni broj se oduzima od trenutnog broja u nizu i tako pratimo kad smo dosli do <=0 
    let y = funkcijaRekurzija(niz_brojevi, n, v,trazeni_broj - niz_brojevi[n - 1]);
    v.pop(v.length - 1);//izbaci zadnjeg

   return Math.min(x, y); //vrati najmanje rjesenje
}