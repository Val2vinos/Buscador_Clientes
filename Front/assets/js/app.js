let fecha = document.getElementById("nacimientoPaciente");
const rut = document.getElementById("urut");
const rutTitular = document.getElementById("u2Rut");
const nombre = document.getElementById("nombre");
const nombreTitular = document.getElementById("nombreTitular");
const polizas = document.getElementById("polizas");
const tabla = document.getElementById("tblPolizas");
let serviciosH = document.getElementById('serviciosH');
let servicios = document.getElementById('servicios');
let tblServiciosH = document.getElementById('tblServiciosH');
let tblServicios = document.getElementById('tblServicios');
let edadPaciente = document.getElementById("edadPaciente");
let region = document.getElementById("regionPaciente");
let ciudad = document.getElementById("ciudadPaciente");
let comuna = document.getElementById("comunaPaciente");
let rutPaciente = document.getElementById('rutPaciente');
let nombrePaciente = document.getElementById('nombrePaciente');
let email = document.getElementById('email');
let tipoAtencion = document.getElementById('tipoAtencion');
let prevision = document.getElementById('previsionPaciente');
let tipoLLamada = document.getElementById('razonLlamada');
let servicio = document.getElementById('servicio');
let ejecutiva = document.getElementById('u2Ejecutiva');
let _poliza = ''
let _sponsor = ''
let _producto = ''
let divObs = document.getElementById('div-observacion')
let guardar = document.getElementById("guardar").addEventListener("submit", function(event){
    event.preventDefault()
  });


const iniciar = () => {
    limpiar()
    getTipoAtencion()
    getPrevision()
    getRegion()
    getTipoLLamada()
    getUsuario()

}

const limpiar = () => {
    //rut.value = ''
    //nombre.value = ''
    fecha.value = ''
    edadPaciente.value = ''
    fechaGestion.value = ''
    horaGestion.value = ''
    tipoAtencion.value = 0
    descAtencion.value = ''
    rutPaciente.value = ''
    nombrePaciente.value = ''
    email.value = ''
    nacimientoPaciente.value = ''
    previsionPaciente.value = 0
    direccionPaciente.value = ''
    region.value = 0
    ciudad.innerHTML =''
    comuna.innerHTML = ''
    telefono.value = ''
}

const getUsuario = async() => {
    const res = await fetch('http://localhost:8080/api/usuario')
    // res.text().then(data => {
    //     ejecutiva.value = data
//   })
    const data = await res.json()
    ejecutiva.innerHTML = ""
    let opcion = document.createElement('option');
    opcion.value = 0;
    opcion.text = 'Seleccione';
    ejecutiva.appendChild(opcion);
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.id
        opcion.text = d.name
        ejecutiva.appendChild(opcion)
    })
}
const getTipoLLamada = async() => {
    const res = await fetch('http://localhost:8080/api/tipollamada')
    const data = await res.json()
    tipoLLamada.innerHTML=""
    let opcion = document.createElement('option');
    opcion.value = 0;
    opcion.text = 'Seleccione';
    tipoLLamada.appendChild(opcion);
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.id
        opcion.text = d.reason
        tipoLLamada.appendChild(opcion)
    })
}

const formatDate = (current_datetime)=>{
    let formatted_date = current_datetime.getDate() + 1 + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear() ;
    return formatted_date;
}

const getTipoAtencion = async() => {
    const res = await fetch("http://localhost:8080/api/tipoatencion")
    const data = await res.json()
    tipoAtencion.innerHTML = ""
    let opcion = document.createElement('option');
    opcion.value = 0
    opcion.text = 'Seleccione'
    opcion.selected = 'true'
    opcion.disabled = 'true'
    tipoAtencion.appendChild(opcion)
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.id
        opcion.text = d.name
        tipoAtencion.appendChild(opcion)
    })
    
}

const getPrevision = async() => {
    const res = await fetch('http://localhost:8080/api/prevision')
    const data = await res.json()
    prevision.innerHTML = ''
    let opcion = document.createElement('option');
    opcion.value = 0
    opcion.text = 'Seleccione'
    prevision.appendChild(opcion)
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.id
        opcion.text = d.name
        prevision.appendChild(opcion)
    })
}

const getRegion = async() => {
    region.innerHTML=""
    ciudad.innerHTML=""
    comuna.innerHTML=""
    const res = await fetch("http://localhost:8080/api/region")
    const data = await res.json()
    let opcion = document.createElement('option');
    opcion.value = 0
    opcion.text = 'Seleccione'
    region.appendChild(opcion)
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.code
        opcion.text = d.name
        region.append(opcion)
    }
    
    )
}

const getCiudad = async() => {
    let codRegion = region.value
    ciudad.innerHTML = ''
    comuna.innerHTML = ''
    const res = await fetch("http://localhost:8080/api/ciudad/" + codRegion)
    const data = await res.json()
    let opcion = document.createElement('option');
    opcion.value = 0
    opcion.text = 'Seleccione'
    ciudad.appendChild(opcion)
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.id
        opcion.text = d.name
        ciudad.appendChild(opcion)
    })
}

const getComuna = async() => {
    comuna.innerHTML = ''
    let codCiudad = ciudad.selectedOptions[0].value
    comuna.innerHTML = ""
    if (codCiudad != 0) {
    const res = await fetch("http://localhost:8080/api/comuna/" + codCiudad)
    const data = await res.json()
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.id
        opcion.text = d.name
        comuna.appendChild(opcion)
    })
    }
}

const getPolicesByRut = async() => {
    divObs.style.display = "flex"
    nombre.value = ''
    tipoAtencion.firstElementChild.setAttribute('selected','true')
    const res = await fetch("http://localhost:8080/api/policesbyrut/" + rut.value.replace('-',''))
    const data = await res.json()
    polizas.innerHTML= ""
    data.forEach((t) => {
        divObs.style.display = "none"
        let endDate = t.EndDate == null ? '' :  formatDate(new Date(t.EndDate))
        nombre.value = t.Name
        rutTitular.value = rut.value
        nombreTitular.value = t.Name
        rutPaciente.value = rut.value
        nombrePaciente.value = t.Name
        email.value = t.mail
        let fila = document.createElement('tr');
        fila.innerHTML = `<tr>
                            <td>${t.Sponsor}</td>
                            <td class = "producto" 
                            onclick = "getServicesByProduct('${t.codeProducto}','${t.Sponsor}','${t.CertifiedFolio}','${t.ContractDate}','${t.ExpirationDate}',${t.IsDeleted})">${t.producto}
                            </td>
                            <td>${t.CertifiedFolio}</td>
                            <td>${formatDate(new Date(t.ContractDate))}</td>
                            <td>${endDate}</td>
                            <td>${t.IsDeleted ? 'No Vigente' : 'Vigente'}</td>
                        </tr>`
        polizas.appendChild(fila);
    });

    tabla.appendChild(polizas)
}

const getServicesByProduct = async(codigo,sponsor,poliza,fechaI,fechaF,isDeleted) => {
    if (!isDeleted) {
        limpiar()
        const res = await fetch("http://localhost:8080/api/servicebyproduct/" + codigo + "&" + sponsor )
        const data = await res.json()
        _producto = codigo
        _sponsor = sponsor
        _poliza = poliza
        

        serviciosH.innerHTML=""
        servicios.innerHTML=""

        let filaH = document.createElement('tr')
        filaH.innerHTML = `<tr>
                                <th>${poliza}</th>
                                <th>${formatDate(new Date(fechaI))}</th>
                                <th>${formatDate(new Date(fechaF))}</th>
                            </tr>`
        serviciosH.appendChild(filaH);

        tblServiciosH.appendChild(serviciosH)

        data.forEach((t) => {
            let fila = document.createElement('tr');
            fila.innerHTML = `<tr>
                                <td>${t.servicio}</td>
                                <td>${t.Quantity}</td>
                                <td>${t.util}</td>
                                <td>0</td>
                                <td>${t.Tope}</td>
                            </tr>`
            servicios.appendChild(fila);
        })
        tblServicios.appendChild(servicios)
        modal.style.display = "block";
        getServicio(codigo,sponsor,poliza,fechaI,fechaF)
        getOrden()

    }
}
const getServicio = async(codigo,sponsor,poliza,fechaI,fechaF) => {
    const res = await fetch("http://localhost:8080/api/servicebyproduct/" + codigo + "&" + sponsor )
    const data = await res.json()
    servicio.innerHTML = ""

    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.value = d.codServicio
        opcion.text = d.servicio
        servicio.appendChild(opcion)
    })
}

const getOrden = async() => {
    const res = await fetch("http://localhost:8080/api/orden/")
    const data = await res.json()
    data.forEach((d) => {
        orden.value = d.numorden
    })
}

const calculaEdad = () => { 
    let edad = 0
    if (fecha.value != '') {
        let hoy = new Date();
        let cumpleanos = new Date(fecha.value);
        edad = hoy.getFullYear() - cumpleanos.getFullYear();
        let m = hoy.getMonth() - cumpleanos.getMonth();
        
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        //console.log(edad) 
        edadPaciente.value = edad
    }
    return edad;
}

const setGestion = async () => {
    let iorden = orden.value;
    let iEjecutiva = ejecutiva.value;
    let iFecha_gestion = fechaGestion.value;
    let iHora_gestion = horaGestion.value;
    let iRut_titular = rutTitular.value;
    let iRut_paciente = rutPaciente.value;
    let iNombre_paciente = nombrePaciente.value;
    let iFecha_nacimiento = fecha.value;
    let iPrevision = prevision.selectedOptions[0].value;
    let iDireccion = direccionPaciente.value;
    let iComuna = comunaPaciente.selectedOptions[0].value;
    let iCiudad = ciudadPaciente.selectedOptions[0].value;
    let iRegion = region.selectedOptions[0].value;
    let iTelefono = telefono.value
    let iEmail = email.value;
    let iTipo_atencion = tipoAtencion.selectedOptions[0].value;
    let iDescripcion = descAtencion.value;
    let iProducto = _producto;
    let iServicio = servicio.selectedOptions[0].value;
    let iPoliza = _poliza;
    let iSponsor = _sponsor;
    let iStatusCalidad = 6; //razonLlamada.selectedOptions[0].value

    try {
        const response = await fetch("http://localhost:8080/api/gestion/", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            iorden,
            iEjecutiva,
            iFecha_gestion,
            iHora_gestion,
            iRut_titular,
            iRut_paciente,
            iNombre_paciente,
            iFecha_nacimiento,
            iPrevision,
            iDireccion,
            iComuna,
            iCiudad,
            iRegion,
            iEmail,
            iTelefono,
            iTipo_atencion,
            iDescripcion,
            iProducto,
            iServicio,
            iPoliza,
            iSponsor,
            iStatusCalidad,
          }),
          
        });
        //const data = await response.json();
        limpiar()
        clo1.onclick()
      } catch (e) {
        alert("Algo salió mal ..." + e);
      }

}

const setObservacion = async () => {
    let iorden = 0;
    let iEjecutiva = u2Ejecutiva.selectedOptions[0].text ;
    let iFecha_gestion = new Date();
    let iHora_gestion = iFecha_gestion.getHours() + ':' + iFecha_gestion.getMinutes();
    iFecha_gestion = iFecha_gestion.toLocaleDateString("en-US")
    let iRut_titular = urut.value;
    let iRut_paciente = '';
    let iNombre_paciente = nombre.value;
    let iFecha_nacimiento = null;
    let iPrevision = '';
    let iDireccion = '';
    let iComuna = null;
    let iCiudad = null;
    let iRegion = null;
    let iTelefono = null;
    let iEmail = null;
    let iTipo_atencion = null;
    let iDescripcion = observacion.value;
    let iProducto = null;
    let iServicio = null;
    let iPoliza = null;
    let iSponsor = null;
    let iStatusCalidad = razonLlamada.selectedOptions[0].value

    console.log(iEjecutiva + '' + iFecha_gestion + '' + iHora_gestion + '' + iRut_titular + '' + iRut_paciente + '' + iNombre_paciente + '' + iDescripcion + '' + iStatusCalidad)
    try {
        const response = await fetch("http://localhost:8080/api/gestion/", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            iorden,
            iEjecutiva,
            iFecha_gestion,
            iHora_gestion,
            iRut_titular,
            iRut_paciente,
            iNombre_paciente,
            iFecha_nacimiento,
            iPrevision,
            iDireccion,
            iComuna,
            iCiudad,
            iRegion,
            iEmail,
            iTelefono,
            iTipo_atencion,
            iDescripcion,
            iProducto,
            iServicio,
            iPoliza,
            iSponsor,
            iStatusCalidad,
          }),
          
        });
        //const data = await response.json();
        // limpiar()
        // clo1.onclick()
      } catch (e) {
        alert("Algo salió mal ..." + e);
      }

}
// Get the modal
var modal = document.getElementById("consolidadoModal");

// Get the <span> element that closes the modal
var clo = document.getElementsByClassName("close")[0];

var clo1 = document.getElementsByClassName("close")[1]

// When the user clicks on <span> (x), close the modal
clo.onclick = function() {
  modal.style.display = "none";
}

clo1.onclick = function() {
    modal.style.display = "none";
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

