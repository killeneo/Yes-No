const text = document.getElementById("textmod")
const btn = document.getElementById("btn")
const modal = document.getElementById("modal")
const bg = document.getElementById("bgMod")
const b1 = document.getElementById("btn1")
const b2 = document.getElementById("btn2")
text.innerText = "Должен ли я тебе за спасение?"

btn.onclick = () => {
    modal.style.display = "block"
}
bg.onclick = () => {
    modal.style.display = "none"
}
const col = document.getElementById("alan")
col.onclick = () => {
    modal.style.display = "none"
}
b2.onclick = () => {
    text.innerHTML = "Кому должен,тому и прощаю,ПОНЯЛ?!"
    b2.onclick = () => {
        text.innerText = "Все давай гуляй"
        b1.style.display = "none"
        b2.style.display = "none"
    }
    b1.onclick = () => {
        text.innerText = "Ждем моих кентов тогда и решим что с тобой делать,либо избить тебя либо забрать все твои деньги и отпустить домой"
        b1.style.display = "none"
        b2.style.display = "none"
    }
}
b1.onclick = () => {
    text.innerHTML = "Спасибо самый добрый ШРЕК НА СВЕТЕ!!!"
    b1.style.display = "none"
    b2.style.display = "none"
}