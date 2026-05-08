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
        video.autoplay = true;
        video.muted = true; // kræves ofte for autoplay
        video.playsInline = true;
        video.classList.add("myVideo");
        section.append(video);
    }

    if(pText != undefined) {
        const p = document.createElement("p");
        p.textContent = pText;
        section.append(p);
    }

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
            vidPath = "vid/intro.mp4"
            btnsText = ["Akt 1"];
        break;

        //Akt 1 - password
        case "Akt 1":
            imgPath = "img/password.png"
            pText = "Opret et password?";
            btnsText = ["Stærkt password", "Svagt password", "Intet password"];
        break;
        case "Stærkt password":
            imgPath = "img/succes.png"
            pText = "Password oprettet.";
            btnsText = ["anim 2"];
        break;
        case "Svagt password":
            imgPath = "img/succes2.png"
            pText = "Password oprettet. Ukendt enhed tilknyttet.";
            btnsText = ["anim 2.1"];
        break;
        case "Intet password":
            imgPath = "img/adgang-mistet.png"
            pText = "Adgang mistet.";
            btnsText = ["Prøv igen"];
        break;
        case "anim 2":
            vidPath = "vid/tracking.mp4"
            btnsText = ["anim 2.2"];
        break;
        case "anim 2.1":
            vidPath = "vid/tracking.mp4"
            btnsText = ["anim 2.1.1"];
        break;
        case "anim 2.2":
            imgPath = "img/tilknytning-fejl.png"
            btnsText = ["Akt 2"];
        break;
        case "anim 2.1.1":
            imgPath = "img/located.gif"
            btnsText = ["Akt 2"];
        break;
        case "Prøv igen":
            pText = "Prøv igen";
            btnsText = ["Akt 1"];
        break;

        //Akt 2 - opdatering
        case "Akt 2":
            imgPath = "img/opdatering.png"
            pText = "Vil du installere systemopdateringen?";
            btnsText = ["Opdatér nu", "Udskyd opdatering", "Afvis"];
        break;
        case "Opdatér nu":  //kort loading anim
            vidPath = "vid/update.mp4"
            pText = "Din telefon er nu opdateret.";
            btnsText = ["anim 3"];
        break;
        case "Udskyd opdatering":
            imgPath ="img/delayed.png"
            pText = "Opdatering udskudt.";
            btnsText = ["anim 3.1"];
        break;
        case "Afvis":
            imgPath ="img/afvist.png"
            pText = "Opdatering afvist";
            btnsText = ["anim 3.2"];
        break;
        case "anim 3":  // anim scene
            vidPath = "vid/phishing.mp4"
            btnsText = ["Akt 3"];
        break;
        case "anim 3.1":  // anim scene
            vidPath = "vid/phishing.mp4"
            btnsText = ["Akt 3.1"];
        break;
        case "anim 3.2":  // anim scene
            vidPath = "vid/phishing.mp4"
            btnsText = ["Akt 3.2"];
        break;

        //Akt 3
        case "Akt 3":
            imgPath = "img/mail.png"
            pText = "Der er en ny e-mail i indbakken. Den ser ud til at være fra Fresa Fone, der afholder en stor konkurrence. Dog har Pachi ikke tilmeldt sig nogen mails. Hvad skal Pachi gøre?";
            btnsText = ["Anmeld og blokér", "Ignorér", "Klik på link"];
        break; 
        case "Anmeld og blokér":
            imgPath = "img/blocked.png"
            pText = "Afsender blokeret.";
            btnsText = ["anim 4"];
        break;
        case "Ignorér":
            imgPath = "img/ignored.png"
            pText = "Pachi vælger at ignorere beskeden.";
            btnsText = ["anim 4"];
        break;

        case "Klik på link":
            imgPath = "img/deltag.png"
            pText = "For at deltage i den store konkurrence, skal man angive sine personlige oplysninger. Hvad skal Pachi gøre?";
            btnsText = ["Luk siden", "Angiv oplysninger"];
        break;
        case "Luk siden":
            imgPath ="img/luk.png"
            pText = "Pachi vælger at lukke siden uden at angive sine personlige oplysninger.";
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