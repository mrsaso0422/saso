import customersModel from "../moedels/customers-models.js";

const URL_API = "https://645284d4bce0b0a0f7492725.mockapi.io/";

const ref_registro = document.querySelector('#registro');
const ref_listar = document.querySelector('#listar');
const ref_buscar = document.querySelector('#buscar');

const myHeaders = new Headers({
    "Content-Type":"aplication/json"
});


fetch(`${URL_API}cusromers`,
    {
        method : "POST",
        headers: myHeaders,
        body:JSON.stringify({customersModel})
    }).then(res=>{
        returnres.json()
    }).then(res=>{
        console,log(res);
    }).catch(err =>{
        console.log(error=>{
            console.log(err);
        })
    })

const getCustomers = async () =>{
    try{
        const respuesta  = await fetch(`${URL_API}/cusromers`);
        //si la respuesta esta correcta
        if(respuesta.status===200){
            const datos = await respuesta.json();
            viewDataHtml(datos);
        }else if(respuesta.status === 401){
            console.log("ha ocurrido un error");
        }else if(respuesta.status === 404){
            console.log("ha ocurrido un error");
        }else{
            console.log("no sabemos que paso:(");
        }
    }catch{
        console.log("error");
    }
}
ref_listar.addEventListener("click", getCustomers);
    function viewDataHtml (dataCustomrs){
    console.log(dataCustomrs)
}

document.querySelectorAll('.tabOpcion').forEach((tabOption)=>{
    tabOption.addEventListener(("click"), (e) =>{
        let datos = JSON.parse(e.target.dataset.verOcultar);
        let cardVer = document.querySelector(datos[0]);
        cardVer.style.display = 'block'
        datos[1].forEach((element) => {
            let divOcultar = document.querySelector(element);
            divOcultar.style.display = 'none';
        })
        e.preventDefault();
        e.stopImmediatePropagation();

    });
}); 


document.querySelector('#btnNuevo').addEventListener.apply('click', () =>{
    inputFrm.querySelector('.form-control').forEach((e) =>{
        e.value = ''
        if(e.name == 'createAt'){
            e.valueAsDate = new Date();
            e.disabled = true;
        }else{
            e.value = ''
        }
    })
    document.querySelectorAll('.btn').forEach((e) =>{
        element.disable = true;
        if((elementa.id !='btnGuardar') &&  (elemet.id != ' btnCancelar')){
            element.classList.add('disable');
        };
    });
});

document.querySelector('#btnCancelar').addEventListener.apply('click', () =>{
    document.querySelectorAll('.btn').forEach((e) =>{
        if((elementa.id !='btnNuevo') ){
            element.classList.remove('disable');
        }else{
            element.classList.toggle('disable');
        }
    });
});