import * as content from '../components/contentModal.js'
import * as api from './api.js'

const modalWindow = document.querySelector('#modalWindow');

document.querySelectorAll(".btnSection").forEach(element =>{
    element.addEventListener('click',async()=>{
        if (category != 'calidad')
        {
            if (opcion == 'opt'){
                cont += 300000;
            }else if (opcion == 'cp'){
                cont += 380000;
            }else (opcion == 'nc'){
                cont += 200000;
                
            // action != 'Agregar' ? contentContiner.appendChild(elementoAgg) : modalWindow.appendChild(total);
        }else if{
            let createClass = content[actionPlusCategory.replace(/ /g, '')];
            let elementAgg = new createClass();
            contentContiner.innerHTML = "";
            contentContiner.appendChild(elementAgg)
        }
    })
})

