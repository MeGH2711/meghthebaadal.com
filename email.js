<<<<<<< HEAD
function SendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_04zymjf";
    const templateID = "template_c2esn7l";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            // Show the modal
            var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
        })
        .catch(err => console.log(err));
=======
function SendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_04zymjf";
    const templateID = "template_c2esn7l";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            // Show the modal
            var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
        })
        .catch(err => console.log(err));
>>>>>>> origin/main
}