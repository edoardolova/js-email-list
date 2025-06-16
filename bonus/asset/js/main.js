
//DOM
const mainDivEl = document.getElementById("mainDiv");
//btn
const generateBtnEl = document.createElement("button");
generateBtnEl.classList.add("btn", "btn-outline-primary", "mb-3");
generateBtnEl.innerText = "GENERA EMAIL";
mainDivEl.appendChild(generateBtnEl);
//ul
const ulEl = document.createElement("ul");
ulEl.classList.add("list-group");
mainDivEl.appendChild(ulEl)

//global
const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const emailList = [];


generateBtnEl.addEventListener(("click"), ()=>{
    resetEmail();
    generateRandomEmails();
});


function saveGeneratedEmail(array, generatedMail){
    array.push(generatedMail);
}

function renderMail(parent, arr){
    arr.forEach((element) =>{
        const liEl = document.createElement("li");
        liEl.classList.add("list-group-item")
        liEl.innerText = element;
        parent.appendChild(liEl);
    });
}

// function generateRandomEmails(){
//     for(let i = 0; i < 10; i++){
//         fetch(endPoint)
//         .then(res => res.json())
//         .then(data =>{
//             saveGeneratedEmail(emailList, data.response);
//             if(emailList.length === 10){
//                 renderMail(ulEl, emailList);
//             }
//         })
//         .catch(err =>{
//             console.log(err);
//         });
//     }
// }
function generateRandomEmails() {
    const fetchPromises = [];

    for (let i = 0; i < 10; i++) {
        fetchPromises.push(fetch(endPoint).then(res => res.json()));
    }

    Promise.all(fetchPromises)
    .then(results => {
        results.forEach(result => {
            saveGeneratedEmail(emailList, result.response);
        });
        renderMail(ulEl, emailList);
    })
    .catch(err => {
        console.error(err);
    });
}


function resetEmail(){
    emailList.length = 0;
    ulEl.innerHTML = "";
}





