import * as content from '../components/contentModal.js'
import * as api from './api.js'

const modalWindow = document.querySelector('#modalWindow');

document.querySelectorAll(".btnSection").forEach(element =>{
    element.addEventListener('click',async()=>{
        if (category != 'calidad')
        {
            // action != 'Agregar' ? contentContiner.appendChild(elementoAgg) : modalWindow.appendChild(total);
        }else{
            let createClass = content[actionPlusCategory.replace(/ /g, '')];
            let elementAgg = new createClass();
            contentContiner.innerHTML = "";
            contentContiner.appendChild(elementAgg)
        }
    })
})

