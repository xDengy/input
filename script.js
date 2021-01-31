function next() {
    document.getElementById('next_form').onclick = function () {
        document.getElementById('form-submit').hidden = false;
        document.getElementById('wear-form').hidden = true;
    }
}

function prev() {
    document.getElementById('prev_form').onclick = function () {
        document.getElementById('form-submit').hidden = true;
        document.getElementById('wear-form').hidden = false;
    }
}

function img() {
    let selTypes = document.getElementById('type_of_wear');
    let kindCollection = document.querySelectorAll('.wear_img');
    selTypes.onchange = function () {
        for (let i = 0; i < kindCollection.length; i++) {
            kindCollection[i].hidden = true;
        }
        let current = document.getElementById('wear_img_' + this.value);
        if (current) {
            current.hidden = false;
        }
    }
}

function submitForm() {
    document.getElementById('submit_form').addEventListener('click', () => {
        let validated = true;

        document.querySelectorAll('[required]').forEach((item) => {
            if (item.value.length < 1) {
                validated = false;
                return;
            }
        });

        if (!validated) {
            console.log(validated.value)
            alert("Заполните все поля");
            return;
        }

        document.getElementById('myform').submit();

    });
}

document.addEventListener('DOMContentLoaded', () => {
    img();
    next();
    prev();
    submitForm();

})