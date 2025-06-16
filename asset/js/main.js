const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const emailList = [];
const mainDivEl = document.getElementById("mainDiv");
const ulEl = document.createElement("ul");
mainDivEl.appendChild(ulEl)

function saveGeneratedEmail(array, generatedMail){
    array.push(generatedMail);
}

function renderMail(parent, arr){
    arr.forEach((element) =>{
        const liEl = document.createElement("li");
        liEl.innerText = element;
        parent.appendChild(liEl);
    });
}

function generateRandomEmails(){
    for(let i = 0; i < 10; i++){
        fetch(endPoint)
        .then(res => res.json())
        .then(data =>{
            saveGeneratedEmail(emailList, data.response);
            if(emailList.length === 10){
                console.log(emailList);
                renderMail(ulEl, emailList);
            }
        })
        .catch(err =>{
            console.log(err);
        });
    }
}

generateRandomEmails();





