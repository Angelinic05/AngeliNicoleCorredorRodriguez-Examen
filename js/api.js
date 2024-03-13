const URT_API = 'http://154.38.171.54:3000/priceE';
const myHeaders = new Headers({
    "Content-Type": "application/json"
});




const getCategoryElement = async(element,id) =>{
    try {
        const respuesta =await fetch(`${URT_API}/${element}/${id}`);
        if (respuesta.status == 200) {
            let datos = await respuesta.json();
            return datos;
        }
    } catch (error) {
        alert(error)
        console.log('Error con el metodo GET: ', error);
    }
}

const post = async(data, element) =>{
    fetch(`${URT_API}/${element}`,{
        method:"POST",
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(res => {return res.json})
    .catch(err  => {console.log("Error en la preticion de POST: ",err)})
}

const patch = async(data, element,id) =>{
    fetch(`${URT_API}/${element}/${id}`,{
        method:"PATCH",
        headers: myHeaders,
        body: JSON.stringify(data)
    })
    .then(res => {return res.json})
    .catch(err  => {console.log("Error en la preticion de PATCH: ",err)})
}



export{
    // getAll as getAll,
    getCategory as getElement,
    post as post,
    patch as patch,
    getCategoryElement as getCategoryElement
}