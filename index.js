var argentina = new Array (
    "Buenos aires",
    "Cordoba",
    "Rosario",
    "Mar del plata",
    "San Miguel de Tucuman",
    "Salta",
    "Santa Fe",
    "Corrientes",
    "Bahia Blanca",
    "Resistencia",
    "Posada",
    "Merlo",
    "Quilmes",
    "San Salvador de Jujuy",
    "Guaymallén",
    "Santiago del Estero",
    "Gregorio de Laferrere",
    "José C. Paz",
    "Paraná",
    "Banfield",
    "González Catán",
    "Neuquén",
    "Formosa",
    "Lanús",
    "La Plata",
    "Godoy Cruz",
    "Isidro Casanova",
    "Las Heras",
    "Berazategui",
    "La Rioja",
    "Comodoro Rivadavia",
    "Moreno",
    "San Luis",
    "San Miguel",
    "San Fernando del Valle de Catamarca",
    "Río Cuarto",
    "Virrey del Pino"
);

var bolivia = new Array (
    "Trinidad",
    "Sucre",
    "Cochabamba",
    "La Paz",
    "Oruro",
    "Cobija",
    "Potosí"
);

var brasil = new Array (
    "São Paulo",
    "Río de Janeiro",
    "Bahía",
    "Distrito Federal",
    "Ceará",
    "Minas Gerais",
    "Amazonas",
    "Paraná",
    "Pernambuco",
    "Pernambuco",
    "Pará",
    "Goiás",
    "Maranhão",
    "Alagoas",
    "Piauí",
    "Río Grande del Norte",
    "Mato Grosso del Sur",
    "Paraíba",
    "Sergipe",
    "Mato Grosso",
    "Rondonia",
    "Santa Catarina",
    "Amapá",
    "Acre",
    "Espírito Santo",
    "Roraima",
    "Tocantins"
);

var chile = new Array (
    "Iquique",
    "Antofagasta",
    "Copiapó",
    "Arica",
    "Coyhaique",
    "Concepción",
    "La Serena",
    "Temuco",
    "Puerto Montt",
    "Valdivia",
    "Punta Arenas",
    "Talca",
    "Santiago",
    "Chillán",
    "Rancagua",
    "Valparaíso"
);

var colombia = new Array (
    "Leticia",
    "Medellín",
    "Arauca",
    "Barranquilla",
    "Bogotá",
    "Cartagena de Indias",
    "Tunja",
    "Manizales",
    "Florencia",
    "Yopal",
    "Popayán",
    "Valledupar",
    "Quibdó",
    "Montería",
    "Inírida",
    "San José del Guaviare",
    "Neiva",
    "Riohacha",
    "Santa Marta",
    "Villavicencio",
    "Pasto",
    "San José de Cúcuta",
    "Mocoa",
    "Pereira",
    "San Andrés",
    "Bucaramanga",
    "Sincelejo",
    "Ibagué",
    "Cali",
    "Mitú",
    "Puerto Carreño"
);

var ecuador = new Array (
    "Cuenca",
    "Guaranda",
    "Azogues",
    "Tulcán",
    "Riobamba",
    "Latacunga",
    "Machala",
    "Esmeraldas",
    "Puerto Baquerizo Moreno",
    "Guayaquil",
    "Ibarra",
    "Loja",
    "Babahoyo",
    "Portoviejo",
    "Macas",
    "Tena",
    "Francisco de Orellana",
    "Puyo",
    "Quito",
    "Santo Domingo",
    "Nueva Loja",
    "Ambato",
    "Zamora"
);

var guayana = new Array (
    "Georgetown",
    "Bartica",
    "Anna Regina",
    "Vreed en Hoop",
    "Goed Fortuin",
    "Linden",
    "Rose Hall",
    "Lethem",
    "Fort Wellington",
    "Parika",
    "Nueva Ámsterdam",
    "Triumph",
    "Mabaruma",
    "Paradise",
    "Jonestown",
    "Corriverton",
    "Mahdia",
    "Port Kaituma",
    "Rustenburg",
    "Camarán"
);

var pagaguay = new Array (
    "Fuerte Olimpo",
    "Ciudad del Este",
    "Pedro Juan Caballero",
    "Filadelfia",
    "Coronel Oviedo",
    "Caazapá",
    "Salto del Guairá",
    "Areguá",
    "Concepción",
    "Caacupé",
    "Villarrica",
    "Encarnación",
    "San Juan Bautista",
    "Pilar",
    "Paraguarí",
    "Villa Hayes",
    "San Pedro de Ycuamandiyú"
);

var peru = new Array (
    "Chachapoyas",
    "Huaraz",
    "Abancay",
    "Arequipa",
    "Ayacucho",
    "Cajamarca",
    "Cusco",
    "Huancavelica",
    "Huánuco",
    "Ica",
    "Huancayo",
    "Trujillo",
    "Chiclayo",
    "Huacho",
    "Iquitos",
    "Puerto Maldonado",
    "Moquegua",
    "Cerro de Pasco",
    "Piura",
    "Puno",
    "PunMoyobamba",
    "Tacna",
    "Tumbes",
    "Pucallpa"
);

var uruguay = new Array (
    "uruguay1",
    "uruguay2",
    "uruguay4",
    "uruguay5",
    "uruguay6"
);

var venezuela = new Array (
    "venezuela1",
    "venezuela2",
    "venezuela4",
    "venezuela5",
    "venezuela6"
);

var todasCiudades = [
    [],
    argentina,
    bolivia,
    brasil,
    chile,
    colombia,
    ecuador,
    guayana,
    pagaguay,
    peru,
    uruguay,
    venezuela  
];


// var etiqueta = document.getElementsByClassName("paises");

// console.log(etiqueta);






function cambiarCiudad() {
    var pais = document.form1.pais[document.form1.pais.selectedIndex].value;

    if (pais != 0) {


        var ciudades = todasCiudades[pais];
        var numCiudades = ciudades.length;
        document.form1.ciudad.length = numCiudades;

        for( i = 0 ; i < numCiudades ; i++ ) {
            document.form1.ciudad.options[i].value = ciudades[i];
            document.form1.ciudad.options[i].text = ciudades[i];
        }
        
        
    } else {
        document.form1.ciudad.length = 1;
        document.form1.ciudad.options[0].value = "-";
        document.form1.ciudad.options[0].text = "-";

    }

    document.form1.ciudad.options[0].selected = true;
}

// formulario

const formulario = document.getElementById('form1');

const input = document.querySelectorAll('#form1 input');



const expresiones = {
	usuario:/^[a-zA-Z0-9\_\-]{4,12}$/,
	nombre:/^[a-zA-Z\_\-\ ]{4,15}$/,
	password:/^.{5,9}$/,
	email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono:/^\d{10,15}$/
}

const validarFormulario=(e) =>{
    switch(e.target.name){
        case "nombres":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__nombres').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombres').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__nombres i').classList.add('fa-check-circle');
                document.querySelector('#grupo__nombres i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__nombres .formulario__input-error').classList.remove('formulario__input-error-activo');
            }
            else{
                document.getElementById('grupo__nombres').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__nombres').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__nombres i').classList.add('fa-times-circle');
                document.querySelector('#grupo__nombres i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__nombres .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
        case "apellidos":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__apellidos').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__apellidos').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__apellidos i').classList.add('fa-check-circle');
                document.querySelector('#grupo__apellidos i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__apellidos .formulario__input-error').classList.remove('formulario__input-error-activo');
            }
            else{
                document.getElementById('grupo__apellidos').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__apellidos').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__apellidos i').classList.add('fa-times-circle');
                document.querySelector('#grupo__apellidos i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__apellidos .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
        case "alias":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo__alias').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__alias').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__alias i').classList.add('fa-check-circle');
                document.querySelector('#grupo__alias i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__alias .formulario__input-error').classList.remove('formulario__input-error-activo');
            }
            else{
                document.getElementById('grupo__alias').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__alias').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__alias i').classList.add('fa-times-circle');
                document.querySelector('#grupo__alias i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__alias .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
        case "password2":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password2 i').classList.add('fa-check-circle');
                document.querySelector('#grupo__password2 i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
            }
            else{
                document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__password2 i').classList.add('fa-times-circle');
                document.querySelector('#grupo__password2 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
        case "correo":
            
        break;
        case "telefono":
            
        break;
    }

}


input.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
}); 