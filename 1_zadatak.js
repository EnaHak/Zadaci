function funkcijaIgra()
            {
                var racunaloIzbor;
                var rngBroj=Math.floor(Math.random() * 3  + 1);
                if(rngBroj== 1){racunaloIzbor="kamen";}
                else if(rngBroj== 2){racunaloIzbor="skare";}
                else if(rngBroj== 3){racunaloIzbor="papir";}

                document.getElementById("Racunalo").value="Racunalo: " + racunaloIzbor;

                if(document.getElementById("Kamen").checked)
                {
                    if(racunaloIzbor=="kamen"){document.getElementById("Rezultat").value="Neriješeno";
                    document.getElementById("Rezultat").style.backgroundColor = "white";}
                    else if(racunaloIzbor=="skare"){document.getElementById("Rezultat").value="Kamen pobjeđuje škare"; 
                    document.getElementById("Rezultat").style.backgroundColor = "lightgreen";}
                    else if(racunaloIzbor=="papir"){document.getElementById("Rezultat").value="Kamen gubi od papira";
                    document.getElementById("Rezultat").style.backgroundColor = "red";}
                }
                else if(document.getElementById("Skare").checked)
                {
                    if(racunaloIzbor=="kamen"){document.getElementById("Rezultat").value="Škare gube od kamena";
                    document.getElementById("Rezultat").style.backgroundColor = "red";}
                    else if(racunaloIzbor=="skare"){document.getElementById("Rezultat").value="Neriješeno";
                    document.getElementById("Rezultat").style.backgroundColor = "white";}
                    else if(racunaloIzbor=="papir"){document.getElementById("Rezultat").value="Škare pobjeđuju papir";
                    document.getElementById("Rezultat").style.backgroundColor = "lightgreen";}
                }
                else if(document.getElementById("Papir").checked)
                {
                    if(racunaloIzbor=="kamen"){document.getElementById("Rezultat").value="Papir pobjeđuje kamen";
                    document.getElementById("Rezultat").style.backgroundColor = "lightgreen";}
                    else if(racunaloIzbor=="skare"){document.getElementById("Rezultat").value="Papir gubi od škara";
                    document.getElementById("Rezultat").style.backgroundColor = "red";}
                    else if(racunaloIzbor=="papir"){document.getElementById("Rezultat").value="Neriješeno";
                    document.getElementById("Rezultat").style.backgroundColor = "white";}
                }
                else
                {
                    //Ukoliko korisnik nije odabrao niti jedan od izbora
                    document.getElementById("Rezultat").value="Korisnik nije odabrao"; 
                }
            }          