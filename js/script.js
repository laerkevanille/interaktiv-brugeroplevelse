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
        video.muted = true;
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


    main.replaceChildren(section);
}

let cursor = 0;
let currentStage = "";

const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

document.addEventListener("keydown", (e) => {

    if (currentStage !== "Tast Konami") return;

    if (e.key.toLowerCase() === KONAMI_CODE[cursor].toLowerCase()) {
        cursor++;
    } else {
        cursor = 0;
    }

    if (cursor === KONAMI_CODE.length) {
        activate();
        cursor = 0;
    }
});

const activate = () => {

    let pText, btnsText, imgPath, vidPath;

    imgPath = "img/hack.png";
    pText = "DU HAR HACKET CIFRO! Truslen er i denne omgang neutraliseret! Tillykke!!";
    btnsText = ["Afslutning"];

    updateUI(pText, btnsText, imgPath, vidPath);
}


const nextStage = (e) => {
    currentStage = e.target.textContent;
    let pText, btnsText, imgPath, vidPath;
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Afsted!":  //anim scene
            vidPath = "vid/intro.mp4";
            btnsText = ["Akt 1"];
        break;

        //Akt 1 - password
        case "Akt 1":
            imgPath = "img/password.png";
            pText = "Opret et password?";
            btnsText = ["Stærkt password", "Svagt password", "Intet password"];
        break;
        case "Stærkt password":
            imgPath = "img/succes.png";
            pText = "Password oprettet.";
            btnsText = ["anim 2"];
        break;
        case "Svagt password":
            imgPath = "img/succes2.png";
            pText = "Password oprettet. Ukendt enhed tilknyttet.";
            btnsText = ["anim 2.1"];
        break;
        case "Intet password":
            imgPath = "img/adgang-mistet.png";
            pText = "Adgang mistet.";
            btnsText = ["Prøv igen"];
        break;
        case "anim 2":
            vidPath = "vid/tracking.mp4";
            btnsText = ["anim 2.2"];
        break;
        case "anim 2.1":
            vidPath = "vid/tracking.mp4";
            btnsText = ["anim 2.1.1"];
        break;
        case "anim 2.2":
            imgPath = "img/tilknytning-fejl.png";
            btnsText = ["Akt 2"];
        break;
        case "anim 2.1.1":
            imgPath = "img/located.gif";
            btnsText = ["Akt 2"];
        break;
        case "Prøv igen":
            pText = "Prøv igen";
            btnsText = ["Akt 1"];
        break;

        //Akt 2 - opdatering
        case "Akt 2":
            imgPath = "img/opdatering.png";
            pText = "Vil du installere systemopdateringen?";
            btnsText = ["Opdatér nu", "Udskyd opdatering", "Afvis"];
        break;
        case "Opdatér nu":  //kort loading anim
            vidPath = "vid/update.mp4";
            pText = "Din telefon er nu opdateret.";
            btnsText = ["anim 3"];
        break;
        case "Udskyd opdatering":
            imgPath ="img/delayed.png";
            pText = "Opdatering udskudt.";
            btnsText = ["anim 3.1"];
        break;
        case "Afvis":
            imgPath ="img/afvist.png"
            pText = "Opdatering afvist";
            btnsText = ["anim 3.2"];
        break;
        case "anim 3":  // anim scene
            vidPath = "vid/phishing.mp4";
            btnsText = ["Akt 3"];
        break;
        case "anim 3.1":  // anim scene
            vidPath = "vid/phishing.mp4";
            btnsText = ["Akt 3.1"];
        break;
        case "anim 3.2":  // anim scene
            vidPath = "vid/phishing.mp4";
            btnsText = ["Akt 3.2"];
        break;

        //Akt 3
        case "Akt 3":
            imgPath = "img/mail.png";
            pText = "Der er en ny e-mail i indbakken. Den ser ud til at være fra Fresa Fone, der afholder en stor konkurrence. Dog har Pachi ikke tilmeldt sig nogen mails. Hvad skal Pachi gøre?";
            btnsText = ["Anmeld og blokér", "Ignorér", "Klik på link"];
        break; 
        case "Anmeld og blokér":
            imgPath = "img/blocked.png";
            pText = "Afsender blokeret.";
            btnsText = ["anim 4"];
        break;
        case "Ignorér":
            imgPath = "img/ignored.png";
            pText = "Pachi vælger at ignorere beskeden.";
            btnsText = ["anim 4"];
        break;

        case "Klik på link":
            imgPath = "img/deltag.png";
            pText = "For at deltage i den store konkurrence, skal man angive sine personlige oplysninger. Hvad skal Pachi gøre?";
            btnsText = ["Luk siden", "Angiv oplysninger"];
        break;
        case "Luk siden":
            imgPath ="img/luk.png";
            pText = "Pachi vælger at lukke siden uden at angive sine personlige oplysninger.";
            btnsText = ["anim 4"];
        break;
        case "Angiv oplysninger":
            imgPath = "img/indsendt.png";
            pText = "Oplysninger indsendt.";
            btnsText = ["Videre"];
        break;
        case "Videre":
            imgPath = "img/adgang-mistet.png";
            pText = "Du er desværre blevet hacket, og har mistet adgang til din mobiltelefon. Måske var det alligevel ikke Fresa Fone der sendte den mail..?";
            btnsText = ["Prøv igen"];
        break;

        case "anim 4":
            imgPath = "img/queen.png";
            pText = "Den besynderlige mail får Pachi til at tænke, at der er noget fuskeri på spil. Han beslutter sig for at advare Dronning Gatita om de mystiske hændelser.";
            btnsText = ["Akt 4"];
        break;

        //Akt 3.1
        case "Akt 3.1":
            imgPath = "img/mail.png";
            pText = "Der er en ny e-mail i indbakken. Den ser ud til at være fra Fresa Fone, der afholder en stor konkurrence. Dog har Pachi ikke tilmeldt sig nogen mails. Hvad skal Pachi gøre?";
            btnsText = ["Anmeld og blokér ", "Ignorér ", "Klik på link "];
        break; 
        case "Anmeld og blokér ":
            imgPath = "img/blocked.png";
            pText = "Afsender blokeret.";
            btnsText = ["anim 4.1"];
        break;
        case "Ignorér ":
            imgPath = "img/ignored.png";
            pText = "Pachi vælger at ignorere beskeden.";
            btnsText = ["anim 4.1"];
        break;

        case "Klik på link ":
            imgPath = "img/deltag.png";
            pText = "For at deltage i den store konkurrence, skal man angive sine personlige oplysninger. Hvad skal Pachi gøre?";
            btnsText = ["Luk siden ", "Angiv oplysninger"];
        break;
        case "Luk siden ":
            imgPath ="img/luk.png";
            pText = "Pachi vælger at lukke siden uden at angive sine personlige oplysninger.";
            btnsText = ["anim 4.1"];
        break;
        case "Angiv oplysninger":
            imgPath = "img/indsendt.png";
            pText = "Oplysninger indsendt.";
            btnsText = ["Videre"];
        break;
        case "Videre":
            imgPath = "img/adgang-mistet.png";
            pText = "Du er desværre blevet hacket, og har mistet adgang til din mobiltelefon. Måske var det alligevel ikke Fresa Fone der sendte den mail..?";
            btnsText = ["Prøv igen"];
        break;

        case "anim 4.1":
            imgPath = "img/queen.png";
            pText = "Den besynderlige mail får Pachi til at tænke, at der er noget fuskeri på spil. Han beslutter sig for at advare Dronning Gatita om de mystiske hændelser.";
            btnsText = ["Akt 4.1"];
        break;

        //Akt 3.2
        case "Akt 3.2":
            imgPath = "img/mail.png";
            pText = "Der er en ny e-mail i indbakken. Den ser ud til at være fra Fresa Fone, der afholder en stor konkurrence. Dog har Pachi ikke tilmeldt sig nogen mails. Hvad skal Pachi gøre?";
            btnsText = [" Anmeld og blokér", " Ignorér", " Klik på link"];
        break; 
        case " Anmeld og blokér":
            imgPath = "img/blocked.png";
            pText = "Afsender blokeret.";
            btnsText = ["anim 4.2"];
        break;
        case " Ignorér":
            imgPath = "img/ignored.png";
            pText = "Pachi vælger at ignorere beskeden.";
            btnsText = ["anim 4.2"];
        break;

        case " Klik på link":
            imgPath = "img/deltag.png";
            pText = "For at deltage i den store konkurrence, skal man angive sine personlige oplysninger. Hvad skal Pachi gøre?";
            btnsText = [" Luk siden", " Angiv oplysninger"];
        break;
        case " Luk siden":
            imgPath ="img/luk.png";
            pText = "Pachi vælger at lukke siden uden at angive sine personlige oplysninger.";
            btnsText = ["anim 4.2"];
        break;
        case "Angiv oplysninger":
            imgPath = "img/indsendt.png";
            pText = "Oplysninger indsendt.";
            btnsText = ["Videre"];
        break;
        case "Videre":
            imgPath = "img/adgang-mistet.png";
            pText = "Du er desværre blevet hacket, og har mistet adgang til din mobiltelefon. Måske var det alligevel ikke Fresa Fone der sendte den mail..?";
            btnsText = ["Prøv igen"];
        break;

        case "anim 4.2":
            imgPath = "img/queen.png";
            pText = "Den besynderlige mail får Pachi til at tænke, at der er noget fuskeri på spil. Han beslutter sig for at advare Dronning Gatita om de mystiske hændelser.";
            btnsText = ["Akt 4.2"];
        break;

        //Akt 4
        case "Akt 4":
            imgPath = "img/VPN.png";
            pText = "Måske er det en god idé at installere en VPN?";
            btnsText = ["Installér VPN", "Gør intet"];
        break;
        case "Installér VPN":
            vidPath = "vid/vpn.mp4";
            pText = "BoskeVPN er nu installeret.";
            btnsText = ["anim 5"];
        break;
        case "Gør intet":
            imgPath = "img/app-luk.png";
            pText = "App quiosco lukket.";
            btnsText = ["anim 5"];
        break;

        case "anim 5":
            imgPath = "img/no-admin.png";
            pText = "Åh nej - den onde hjort Cifro har forsøgt at hacke dig for at se din lokation! Heldigvis kunne han ikke få adgang.";
            btnsText = ["anim 6"];
        break;

        case "anim 6":
            imgPath = "img/fork.png";
            pText = "Pachi fortsætter mod slottet for at advare Dronning Gatita, men pludselig deler vejen sig i to. Mon han kan bruge GPS for at finde vej?";
            btnsText = ["Akt 5"];
        break;


        //Akt 4.1
        case "Akt 4.1":
            imgPath = "img/VPN.png";
            pText = "Måske er det en god idé at installere en VPN?";
            btnsText = ["Installér VPN ", "Gør intet"];
        break;
        case "Installér VPN ":
            imgPath = "img/outdated-update.png";
            pText = "Dit styresystem er forældet og understøtter ikke denne app. Vil du opdatere styresystemet?";
            btnsText = ["Opdatér nu ", "Afvis "];
        break;
        case "Opdatér nu ":
            vidPath = "vid/update.mp4";
            pText = "Din telefon er nu opdateret.";
            btnsText = ["Installér VPN"];
        break;
        case "Afvis ":
            imgPath = "img/afvist.png";
            pText = "Opdatering afvist. BoskeVPN kunne ikke installeres.";
            btnsText = ["anim 5.1"];
        break;

        case "anim 5.1":
            imgPath = "img/yes-admin.png";
            pText = "Åh nej - den onde hjort Cifro har forsøgt at hacke dig for at se din lokation! Sikkerheden på din mobil har været svækket, og han har desværre fået delvis adgang.";
            btnsText = ["anim 6.1"];
        break;

        case "anim 6.1":
            imgPath = "img/fork.png";
            pText = "Pachi fortsætter mod slottet for at advare Dronning Gatita, men pludselig deler vejen sig i to. Mon han kan bruge GPS for at finde vej?";
            btnsText = ["Akt 5.1"];
        break;


        // Akt 5
        case "Akt 5":
            imgPath = "img/fork.png";
            pText = "Pachi fortsætter mod slottet for at advare Dronning Gatita, men pludselig deler vejen sig i to. Mon han kan bruge GPS for at finde vej?";
            btnsText = ["Brug GPS", "Drej til højre", "Drej til venstre"];
        break;
        case "Brug GPS":
            imgPath = "img/rute.png";
            pText = "GPS'en anbefaler at gå til venstre. Hvad vil du gøre?";
            btnsText = ["Drej til højre", "Drej til venstre"];
        break;
        case "Drej til højre":
            imgPath = "img/lost.png";
            pText = "Pachi drejer til højre, men farer vild i skoven. Efter et par timer indser han, at han enten må give op eller gå tilbage til hvor vejen deler sig. Hvad skal han gøre?";
            btnsText = ["Gå tilbage", "Giv op"];
        break;
        case "Drej til venstre":
            imgPath = "img/gamepad.png";
            pText = "Pachi drejer til venstre og nærmer sig dronningens slot. Dog er der noget i buskadset, der tiltrækker hans opmærksomhed.";
            btnsText = ["Akt 6"];
        break;
        case "Gå tilbage":
            imgPath = "img/fork.png";
            pText = "Pachi går tilbage og prøver den anden vej i stedet.";
            btnsText = ["Drej til venstre"];
        break;
        case "Giv op":
            imgPath = "img/nej.png";
            pText = "Nej.";
            btnsText = ["Gå tilbage"];
        break;


        // Akt 5.1
        case "Akt 5.1":
            imgPath = "img/fork.png";
            pText = "Pachi fortsætter mod slottet for at advare Dronning Gatita, men pludselig deler vejen sig i to. Mon han kan bruge GPS for at finde vej?";
            btnsText = ["Brug GPS ", "Drej til højre", "Drej til venstre"];
        break;
        case "Brug GPS ":
            imgPath = "img/internet.png";
            pText = "Du har desværre ingen internetforbindelse. Kan nogen have kontrolleret det uden dit samtykke..? Pachi er nødt til at vælge en vej og håbe på det bedste.";
            btnsText = ["Drej til højre", "Drej til venstre"];
        break;


        // Akt 6
        case "Akt 6":
            imgPath = "img/gamepad.png";
            pText = "Pachi undersøger den mystiske obelisk lidt nærmere. Der er knapper på, og en krystal der virker underligt bekendt. Pachi er nervøs, men har alligevel en uforklarlig følelse af, at knapperne kunne være en hjælp. Hvad skal Pachi gøre?";
            btnsText = ["Tryk på knapperne", "Gå forbi"];
        break;
        case "Tryk på knapperne":
            imgPath = "img/gamepad2.png";
            pText = "Pludselig får Pachi en idé! Han ved ikke hvor den kommer fra, eller helt hvad det betyder, men noget siger ham, at han skal taste Konami-koden. Kan du hjælpe Pachi?";
            btnsText = ["Tast Konami", "Gå forbi"];
        break;
        case "Gå forbi":
            imgPath = "img/background3.png";
            pText = "Pachi går videre uden at trykke på knapperne, og nærmer sig hastigt slottet - men gad vide hvad der var sket, hvis han alligevel havde trykket?";
            btnsText = ["Akt 7"];
        break;
        case "Giv op ":
            imgPath = "img/background3.png";
            pText = "Pachi går videre uden at trykke på knapperne, og nærmer sig hastigt slottet - men gad vide hvad der var sket, hvis han alligevel havde trykket?";
            btnsText = ["Akt 7"];
        break;
        case "Har ikke tastatur":
            imgPath = "img/background3.png";
            pText = "Pachi går videre uden at trykke på knapperne, og nærmer sig hastigt slottet - men gad vide hvad der var sket, hvis han alligevel havde trykket?";
            btnsText = ["Akt 7"];
        break;
        case "Tast Konami":
            imgPath = "img/gamepad2.png";
            pText = "Tast Konami-koden på dit tastatur";
            btnsText = ["Har ikke tastatur", "Giv op "];
        break;


        // Akt 7
        case "Akt 7":
            vidPath = "vid/queen.mp4";
            pText = "Pachi ankommer endelig til Dronning Gatitas farverige slot! Med hendes hjælp kan teknologien endelig vende tilbage til den verden, der havde glemt alt om det.";
            btnsText = ["Hurra!"];
        break;
        case "Hurra!":
            imgPath = "img/cifro.png";
            pText = "Men husk! Cifro er stadig derude med sine ondskabsfulde planer og sin lyst til magt, og faren lurer fortsat...";
            btnsText = ["Prøv igen"];
        break;


        //Secret
        case "Secret":
            imgPath = "img/hack.png";
            pText = "DU HAR HACKET CIFRO! Truslen er i denne omgang neutraliseret! Tillykke!!";
            btnsText = ["Afslutning"];
        break;
        case "Afslutning":
            vidPath = "vid/queen.mp4";
            pText = "Pachi ankommer endelig til Dronning Gatitas farverige slot! Med hendes hjælp kan teknologien endelig vende tilbage til den verden, der havde glemt alt om det.";
            btnsText = ["Hurra! "];
        break;


        default: console.log("Hmm hvad har du nu lavet?");
    }
    updateUI(pText, btnsText, imgPath, vidPath);
}

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}
