'use strict'

function next() {
    document.getElementById('next_form').onclick = function () {
        document.getElementById('form-submit').hidden = false;
        document.getElementById('wear-form').hidden = true;
        document.getElementById('showform').hidden = true;
    }
}

function prev() {
    document.getElementById('prev_form').onclick = function () {
        document.getElementById('form-submit').hidden = true;
        document.getElementById('wear-form').hidden = false;
        document.getElementById('showform').hidden = true;
    }
}

function img() {
    let WearTypes = document.getElementById('type_of_wear');
    let typeCollection = document.querySelectorAll('.wear_img');
    WearTypes.onchange = function () {
        for (let i = 0; i < typeCollection.length; i++) {
            typeCollection[i].hidden = true;
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
            alert("Заполните все поля");
            return;
        }

        function fillForm() {
            let ShowTypeOfWear = document.getElementById('type_of_wear').value;
            let ShowSizeOfWear = document.getElementById('size_of_wear').value;
            let ShowColorOfWear = document.getElementById('color_of_wear').value;
            let ShowNumber = document.getElementById('number').value;
            let ShowTel = document.getElementById('tel').value;
            let ShowCity = document.getElementById('city').value;
            let ShowAddress = document.getElementById('address').value;
            let ShowName = document.getElementById('name').value;
            let Show2ndName = document.getElementById('2ndName').value;
            let ShowMail = document.getElementById('mail').value;


            let showHtml = 'Тип одежды: ' + ShowTypeOfWear + '<br>' + 'Размер одежды: ' + ShowSizeOfWear + '<br>' + 'Цвет одежды: ' + ShowColorOfWear + '<br>' + 'Размер одежды: ' + ShowNumber + '<br>' + 'Телефон: ' + ShowTel + '<br>' + 'Город: ' + ShowCity + '<br>' + 'Адрес: ' + ShowAddress + '<br>' + 'Имя: ' + ShowName + '<br>' + 'Фамилия: ' + Show2ndName + '<br>' + 'Электронная почта: ' + ShowMail;

            document.getElementById('showform').innerHTML = showHtml;
        }

        document.getElementById('form-submit').hidden = true;
        document.getElementById('showform').hidden = false;
        fillForm();

    });
}


document.addEventListener('DOMContentLoaded', () => {
    img();
    next();
    prev();
    submitForm();

})

/*
function showForm (){
    let showMyForm = 'showform.html';
    document.getElementById('submit_form').addEventListener('click', () => {
        document.open(showMyForm);
    });
}*/