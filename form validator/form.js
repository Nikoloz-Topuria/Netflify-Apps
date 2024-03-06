function validateForm(event) {
    event.preventDefault(); 

    // erroris
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // username s dadastureba
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        return false;
    }

    // email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        return false;
    }

    // password
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters";
        return false;
    }


    document.getElementById("myForm").submit();
}