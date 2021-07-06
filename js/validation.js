const Form = {
    form: document.querySelector('.form__form'),
    inputs: Array.from( document.querySelectorAll('.form__input') ),

    validate() {
        Form.inputs.forEach(input => {
            input.addEventListener('input', () => {
                Form.addRequired(input)
            })
        });
    },

    addRequired(input) {
        input.setAttribute('required', '')
    }
}

Form.validate();

Form.form.addEventListener('submit', function(event) {
    event.preventDefault();
    Form.inputs.forEach(input => {
        if (!input.value) {
            Form.addRequired(input);
        }
    });
})