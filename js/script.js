const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");
const main = document.querySelector("main");

const updateUI = (pText, btnsText, imgPath, vidPath) => {
    const section = document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active");

    if(imgPath != undefined) {
        const img = document.createElement("img");
        img.src = imgPath;
        section.append(img);
    }

     if(vidPath != undefined) {
        const video = document.createElement("video");
        video.src = vidPath;
        section.append("video");
    }

    const p = document.createElement("p");
    p.classList.add("visually-hidden");   //spillets tekst er en del af animationen og tilføjes her for skærmlæsertilgængelighed
    p.textContent = pText;
    section.append(p);

    btnsText.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", nextStage)
        section.append(button);
    })


    main.replaceChildren(section)
}

const nextStage = (e) => {
    let pText, btnsText, imgPath, vidPath;
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Afsted!":  //anim scene
            pText = "Lorem Ipsum";
            btnsText = ["Akt 1"];
        break;

        //Akt 1 - password
        case "Akt 1":
            pText = "Opret et password?";
            btnsText = ["Stærkt password", "Svagt password", "Intet password"];
        break;
        case "Stærkt password":
            pText = "Password oprettet.";
            btnsText = ["anim 2"];
        break;
        case "Svagt password":  //location=true
            pText = "Password oprettet. Ukendt enhed tilknyttet.";
            btnsText = ["anim 2.1"];
        break;
        case "Intet password":
            pText = "Adgang mistet.";
            btnsText = ["Prøv igen"];
        break;
        case "anim 2":  //anim scene
            pText = "Lorem Ipsum";
            btnsText = ["Akt 2"];
        break;
        case "anim 2.1":
            pText = "Lorem Ipsum";
            btnsText = ["Akt 2"];
        break;
        case "Prøv igen":
            pText = "Prøv igen";
            btnsText = ["Akt 1"];
        break;

        //Akt 2 - opdatering
        case "Akt 2":
            pText = "Vil du installere systemopdateringen?";
            btnsText = ["Opdatér nu", "Udskyd opdatering", "Afvis"];
        break;
        case "Opdatér nu":  //kort loading anim
            pText = "Din telefon er nu opdateret.";
            btnsText = ["anim 3"];
        break;
        case "Udskyd opdatering":  //delay=true
            pText = "Opdatering udskudt.";
            btnsText = ["anim 3"];
        break;
        case "Afvis":  //outdated=true
            pText = "Opdatering afvist";
            btnsText = ["anim 3"];
        break;
        case "anim 3":  // anim scene
            pText = "Lorem Ipsum";
            btnsText = ["Akt 3"];
        break;

        //Akt 3
        case "Akt 3":
            pText = "Hvad skal Pachi gøre?";
            btnsText = ["Anmeld og blokér", "Ignorér", "Klik på link"];
        break; 
        case "Anmeld og blokér":
            pText = "Afsender blokeret.";
            btnsText = ["anim 4"];
        break;
        case "Ignorér":
            pText = "Pachi vælger at ignorere beskeden.";
            btnsText = ["anim 4"];
        break;

        case "Klik på link": //kort anim
            pText = "Lorem Ipsum";
            btnsText = ["Luk siden", "Angiv oplysninger"];
        break;
        case "Luk siden":  //compromised=true
            pText = "Pachi vælger at lukke siden uden at angive sine personlige oplysninger";
            btnsText = ["anim 4"];
        break;
        case "Angiv oplysninger":  //kort anim?
            pText = "Oplysninger indsendt. Adgang mistet.";
            btnsText = ["Prøv igen"];
        break;

        case "anim 4":  //anim scene
            pText = "Lorem Ipsum";
            btnsText = ["Akt 4"];
        break;

        //Akt 4
        case "Option 3":
            pText = "Lorem Ipsum";
            btnsText = ["Start Over"];
        break;

        default: console.log("Hmm hvad har du nu lavet?");
    }
    updateUI(pText, btnsText, imgPath, vidPath);
}

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}