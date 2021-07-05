const data = [];
const inputTitle = document.querySelector(".inputTitle");
const inputContent = document.querySelector(".inputContent");
const save = document.querySelector(".save");
const Lists = document.querySelector(".Lists");

function createList() {
    let list = "";
    data.forEach(function (item, i) {
        list += `<li class="List" data-num="${i}">
        <h2>${item.title}</h2>
        <p>${item.content}</p>
        <input type="button" class="delete" value="刪除">
    </li>`;
    })
    Lists.innerHTML = list;
}
createList();

save.addEventListener("click", function (e) {
    let theData = {};
    if (inputTitle.value == "" || inputContent.value == "") {
        alert("儲存失敗，您有東西忘記輸入喔!!");
        return;
    }
    theData.title = inputTitle.value;
    theData.content = inputContent.value;
    data.push(theData);
    createList();
    inputTitle.value = "";
    inputContent.value = "";
})


Lists.addEventListener("click", function (e) {
    if (e.target.getAttribute("class") != "delete") {
        return;
    }
    let num = e.target.getAttribute("data-num");
    data.splice(num, 1);
    createList();
})








/* console.log(inputTitle); */