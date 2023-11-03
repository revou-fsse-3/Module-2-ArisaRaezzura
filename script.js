function submit(event) {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const birth = document.getElementById("birth").value;
    const book = document.getElementById("book").value;
    const message = document.getElementById("message").value;
    if (email == "" || name == "" || birth == "" || book == "" || message == "") {
        event.preventDevault()
        prompt("Please finish up the form before submitting.");
    }
    else {
        event.preventDevault()
        prompt("Form submitted succesfully! Congratulation " + name + "!");
    }
}

function openNav() {
    document.getElementById("sideNav").style.width = "55%";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}