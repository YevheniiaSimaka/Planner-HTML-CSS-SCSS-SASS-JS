var cards = $(".card .btn")
var ex = $(".open .ex")
var opening = $(".open")

for (var i = 0; i < cards.length; i++) {
    opening[i].classList.add(i)
    cards[i].addEventListener("click", function () {
        if (this.classList.contains("1")) {
            opening[0].classList.add("close123")
        } else if (this.classList.contains("2")) {
            opening[1].classList.add("close123")
        } else if (this.classList.contains("3")) {
            opening[2].classList.add("close123")
        } else if (this.classList.contains("4")) {
            opening[3].classList.add("close123")
        } else if (this.classList.contains("5")) {
            opening[4].classList.add("close123")
        } else if (this.classList.contains("6")) {
            opening[5].classList.add("close123")
        } else if (this.classList.contains("5")) {
            opening[6].classList.add("close123")
        } else if (this.classList.contains("6")) {
            opening[7].classList.add("close123")
        } else {
            alert(this.classList)
        }
    })

    ex[i].classList.add(i)
    ex[i].addEventListener("click", function () {
        if (this.classList.contains("0")) {
            opening[0].classList.remove("close123")
        } else if (this.classList.contains("1")) {
            opening[1].classList.remove("close123")
        } else if (this.classList.contains("2")) {
            opening[2].classList.remove("close123")
        } else if (this.classList.contains("3")) {
            opening[3].classList.remove("close123")
        } else if (this.classList.contains("4")) {
            opening[4].classList.remove("close123")
        } else if (this.classList.contains("5")) {
            opening[5].classList.remove("close123")
        } else if (this.classList.contains("6")) {
            opening[6].classList.remove("close123")
        } else if (this.classList.contains("7")) {
            opening[7].classList.remove("close123")
        } else {
            alert(this.classList)
        }
    })
}