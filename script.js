'use strict'

function nextStep() {
    document.getElementById('next_form').onclick = function () {
        document.getElementById('form-submit').hidden = false;
        document.getElementById('wear-form').hidden = true;
        document.getElementById('showForm').hidden = true;
    }
}

function prevStep() {
    document.getElementById('prev_form').onclick = function () {
        document.getElementById('form-submit').hidden = true;
        document.getElementById('wear-form').hidden = false;
        document.getElementById('showForm').hidden = true;
    }
}

function imgLoad() {
    let wearTypes = document.getElementById('type_of_wear');
    let typeCollection = document.querySelectorAll('.wear_img');
    wearTypes.onchange = function () {
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
        let array = [];
        let inputCount = 0;

        document.querySelectorAll('[required]').forEach((item) => {
            if (item.value.length < 1) {
                validated = false;
                return;
            }
        });

        if (!validated) {
            alert("Заполните пустые поля");
            return;
        }

        function addArray() {
            let data = document.querySelectorAll('.form_item ')

            for (let i = 0; i < data.length; i++) {
                if (inputCount === 0) {
                    array[i] = "Тип одежды : " + data[i].value;
                    inputCount++
                    continue;
                }
                if (inputCount === 1) {
                    array[i] = "Размер одежды : " + data[i].value;
                    inputCount++
                    continue;
                }
                if (inputCount === 2) {
                    array[i] = "Цвет одежды : " + data[i].value;
                    inputCount++
                    continue;
                }
                if (inputCount === 5) {
                    array[i] = "Город : " + data[i].value;
                    inputCount++
                    continue;
                }
                let textField = data[inputCount].labels[0].innerText;
                array[i] = textField + ": " + data[i].value;
                inputCount++;
            }
        }

        function fillForm() {
            for (let i = 0; i < array.length; i++) {

                document.getElementById('showForm').insertAdjacentHTML("beforeend", '<div></div>' + array[i]);
            }
        }

        document.getElementById('form-submit').hidden = true;
        document.getElementById('showForm').hidden = false;

        addArray();
        fillForm();
        localStorage.clear();
    });
}


document.addEventListener('DOMContentLoaded', () => {

        const elements = document.querySelectorAll('.form_item');

        elements.forEach(item => {
            const name = item.getAttribute('name');

            item.addEventListener('input', event => {
                localStorage.setItem(name, item.value)
            });

            item.value = localStorage.getItem(name);
        });


imgLoad();
nextStep();
prevStep();
submitForm();

})