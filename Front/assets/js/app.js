let fecha = document.getElementById("nacimientoPaciente")
const rut = document.getElementById("urut");
const rutTitular = document.getElementById("u2Rut")
const nombre = document.getElementById("nombre")
const nombreTitular = document.getElementById("nombreTitular")
const polizas = document.getElementById("polizas");
const tabla = document.getElementById("tblPolizas");
let serviciosH = document.getElementById('serviciosH')
let servicios = document.getElementById('servicios')
let tblServiciosH = document.getElementById('tblServiciosH')
let tblServicios = document.getElementById('tblServicios')
let edadPaciente = document.getElementById("edadPaciente")
let region = document.getElementById("regionPaciente")
let ciudad = document.getElementById("ciudadPaciente")
let comuna = document.getElementById("comunaPaciente")

const iniciar = () => {
    rut.value = ""
    nombre.value = ""
    fecha.value = ""
    edadPaciente.value = ""
    getRegion()

}

const getCiudad = async() => {
    let codRegion = region.value
    codRegion = codRegion.slice(0,codRegion.indexOf("-"))
    console.log(codRegion)
    const res = await fetch("http://localhost:8080/api/ciudad/" + codRegion)
    const data = await res.json()
    comuna.innerHTML = ""
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.innerHTML = `<option value="${d.id}">${d.name}</option>`
        ciudad.appendChild(opcion)
    })
}

const formatDate = (current_datetime)=>{
    let formatted_date = current_datetime.getDate() + 1 + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getFullYear() ;
    return formatted_date;
}

const getRegion = async() => {
    const res = await fetch("http://localhost:8080/api/region/")
    const data = await res.json()
    region.innerHTML=""
    ciudad.innerHTML=""
    comuna.innerHTML=""
    //console.log(data)
    data.forEach((d) => {
        let opcion = document.createElement('option');
        opcion.innerHTML = `<option value="${d.code}">${d.name}</option>`
        region.appendChild(opcion)
    }
    
    )
}
const getPolicesByRut = async() => {
    
    const res = await fetch("http://localhost:8080/api/policesbyrut/" + rut.value)
    const data = await res.json()
    polizas.innerHTML= ""
    data.forEach((t) => {
        let endDate = t.EndDate == null ? '' :  formatDate(new Date(t.EndDate))
        nombre.value = t.Name
        rutTitular.value = rut.value
        nombreTitular.value = t.Name
        let fila = document.createElement('tr');
        fila.innerHTML = `<tr>
                            <td>${t.Sponsor}</td>
                            <td onclick = "getServicesByProduct('${t.codeProducto}','${t.Sponsor}','${t.CertifiedFolio}','${t.ContractDate}','${t.ExpirationDate}')">${t.producto}</td>
                            <td>${t.CertifiedFolio}</td>
                            <td>${formatDate(new Date(t.ContractDate))}</td>
                            <td>${endDate}</td>
                            <td>${t.IsDeleted ? 'No Vigente' : 'Vigente'}</td>
                        </tr>`
        polizas.appendChild(fila);
    });

    tabla.appendChild(polizas)
}

const getServicesByProduct = async(codigo,sponsor,poliza,fechaI,fechaF) => {
    const res = await fetch("http://localhost:8080/api/servicebyproduct/" + codigo + "&" + sponsor )
    const data = await res.json()
    //console.log(data)
    // Get the modal
    

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
}

const calculaEdad = () => { 
    let hoy = new Date();
    let cumpleanos = new Date(fecha.value);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();
     
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    //console.log(edad) 
    edadPaciente.value = edad
    return edad;
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
