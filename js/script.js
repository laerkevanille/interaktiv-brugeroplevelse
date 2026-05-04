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
        case "Start":
            pText = "Lorem Ipsum";
            btnsText = ["Afsted!"];
        break;
        case "Afsted!":
            pText = "Lorem Ipsum";
            btnsText = ["Start Over"];
        break;
        case "Option 2":
            pText = "Lorem Ipsum";
            btnsText = ["Start Over"];
        break;
        case "Option 3":
            pText = "Lorem Ipsum";
            btnsText = ["Start Over"];
        break;
        case "Start Over":
            pText = "Lorem Ipsum";
            btnsText = ["Afsted!"];
        break;
        default: console.log("Don't know");
    }
    updateUI(pText, btnsText, imgPath, vidPath);
}

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}