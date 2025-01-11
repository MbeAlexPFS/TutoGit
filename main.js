var nbcount = 0
let count = document.getElementById("count")
let btn = document.getElementById("btn")

function click() {
    nbcount ++
    count.textContent = "click count: "+nbcount
}


btn.onclick = () => {
    click()
}

