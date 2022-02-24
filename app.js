"use strict"

const input_field = document.querySelector("div.input_wrapper input[type=\"text\"]")
const send_btn = document.querySelector("form img.icon.icon_submit")
const form = document.getElementsByTagName("form")[0]
const section_todo = document.querySelector("ul.section_todo")

const all_li_items = document.querySelector("ul")

send_btn.addEventListener("click", () => {
    const inves_submit = document.querySelector("form #submit_btn_hide")
    inves_submit.click()
})

let Developer_name = "Sazu";

form.addEventListener(
    "submit",
    (e) => {
        e.preventDefault()
        if (!(input_field.value === '')) {
            let element = document.createElement("li")

            element.innerHTML = `
            <h1>${input_field.value}</h1>
            <div>
                <img src="./Icon/Check.svg" alt="check" class="check">
                <img src="./Icon/X.svg" alt="X" class="X">
            </div>`

            section_todo.append(element)
            input_field.value = ``
        }
    }
)

all_li_items.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
        e.target.parentNode.parentNode.children[0].classList.toggle("line_t")
    } else if (e.target.classList.contains("X")) {
        e.target.parentNode.parentNode.remove()
    }
})