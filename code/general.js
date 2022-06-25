const contact_buttons = document.querySelectorAll (".contact a.btn")

function update_social_buttons () {
    if (window.matchMedia("(max-width: 600px)").matches) {
        for (const contact_button of contact_buttons) {
            contact_button.classList.remove("regular")
            contact_button.classList.add("dark")
        } 
    } else {
        for (const contact_button of contact_buttons) {
            contact_button.classList.add("regular")
            contact_button.classList.remove("dark")
        } 
    }
}

update_social_buttons ()
