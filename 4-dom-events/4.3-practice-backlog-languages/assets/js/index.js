// const elementForm = document.getElementById('language-form');
// const myInput = document.getElementsByClassName('myInput');
// const myDiv = document.getElementsByTagName('div');

const elementForm = document.querySelector('#language-form');
const ulElement = document.querySelector('#list-languages');
let languages = [];
// const myInput = document.querySelector('.myInput');
// const myInput = document.querySelector('div');

elementForm.addEventListener('submit', (event) => {

    // prevenir el envio del formulario
    event.preventDefault();

    // acceder al dom del formulario
    const inputLanguageElement = event.target.languageElement;
    const radiosNodeList = event.target.statusRadioElement;
    const statusElement = Array.from(radiosNodeList).find(element => element.checked);
    
    // validar que existian valores en el formulario
    if (!inputLanguageElement?.value || !statusElement?.value) { // statusElement && statusElement.value
        // encadamiento opcional para validar objetos y propiedades
        // statusElement && statusElement.value && statusElement.value.otherProp
        // !statusElement?.value?.otherProp
        return;
    }

    // armar una estructura de datos, segun lo que necesitamos
    const language = {
        description: inputLanguageElement.value,
        status: statusElement.value
    }
    languages.push(language);
    // limpiar la vista anterior
    cleanView();
    // call funcion que crea y agrega los elementos nuevos.
    renderViewlanguages(languages);

});

const cleanView = () => {
    ulElement.innerHTML = '';
}

const renderViewlanguages = (languages) => {
    languages.forEach((element, index) => {
        // create elements
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const iconElement = document.createElement('i');
        const buttonElement = document.createElement('button');
        // agregar estilos
        liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        iconElement.classList.add('bi', 'bi-pause-circle-fill', 'text-warning');
        buttonElement.classList.add('bi', 'bi-trash3-fill');
        // validar el estatus del icon
        const status = getStatus(index, element.status);
        setStatus(iconElement, status);
        // agregar atributos
        buttonElement.setAttribute('index', index);
        // agregar evento al boton
        buttonElement.addEventListener('click', handleDelete);
        // agregar texto
        liElement.innerHTML = element.description;
        // agregar elementos al DOM
        ulElement.appendChild(liElement);
        liElement.appendChild(divElement);
        divElement.appendChild(iconElement);
        divElement.appendChild(buttonElement);

    })
}

const handleDelete = (event) => {
    debugger
    const positionStr = event.target.getAttribute('index');
    const postion = parseInt(positionStr);
    languages.splice(postion, 1);
    cleanView();
    renderViewlanguages(languages);
};

const getStatus = () => {

};

const setStatus = () => {

};