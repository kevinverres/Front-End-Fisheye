function displayElement(data) {
    const div_form = document.getElementById("formulaire");
    const label_lastname = document.createElement("label");
    const label_email = document.createElement("label");
    const label_textarea = document.createElement("label");
    const input_firstname = document.createElement("input");
    const input_lastname = document.createElement("input");
    const input_email = document.createElement("input");
    const textarea = document.createElement("textarea");

    const header_modal = document.getElementById("header_modal");
    const h3 = document.createElement("h3");

    h3.textContent = `${data.name}`;
    label_lastname.textContent = 'Nom';
    label_email.textContent = 'Email';
    label_textarea.textContent = 'Votre message';

    h3.setAttribute('id', 'name');
    input_firstname.setAttribute('id', 'firstname');
    input_lastname.setAttribute('id', 'lastname');
    label_lastname.setAttribute('for', 'lastname');
    label_lastname.setAttribute('id', 'label_lastname');
    label_email.setAttribute('id', 'label_email');
    input_email.setAttribute('id', 'email');
    label_textarea.setAttribute('id', 'label_textarea');
    textarea.setAttribute('id', 'textarea');

    header_modal.appendChild(h3);

    div_form.appendChild(input_firstname);
    div_form.appendChild(label_lastname);
    div_form.appendChild(input_lastname);
    div_form.appendChild(label_email);
    div_form.appendChild(input_email);
    div_form.appendChild(label_textarea);
    div_form.appendChild(textarea);
}

function displayModal() {
    const modal = document.getElementById("contact_modal");

    modal.style.display = "block";
    modal.style.position = "fixed";

}

function closeModal() {
    const modal = document.getElementById("contact_modal");

    modal.style.display = "none";
    modal.style.position = "initial";
}
