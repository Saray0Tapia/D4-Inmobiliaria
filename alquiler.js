const alquileres=document.querySelector("#alquiler")
const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'http://127.0.0.1:5500/propiedades_alquiler.html',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: 2.000,
    smoke: false,
    pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'http://127.0.0.1:5500/propiedades_alquiler.html',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2.500,
        smoke: true,
        pets: true
     },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'http://127.0.0.1:5500/propiedades_alquiler.html',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2.200,
        smoke: false,
        pets: false

    },
    {
        nombre: 'Casa apartada en colina',
        src: 'http://127.0.0.1:5500/propiedades_alquiler.html',
        descripcion: 'Casa campestre de madera ubicada en una exclusiva zona residencial',
        ubicacion: 'Linz, Austria',
        habitaciones: 4,
        costo: 6.000,
        smoke: false,
        pets: false

    },
    {
        nombre: 'Casa luminoso cerca de canchas de tenis',
        src: 'http://127.0.0.1:5500/propiedades_alquiler.html',
        descripcion: 'Esta hermosa casa ofrece cercani a zona deportes',
        ubicacion: 'Miami, EEUU',
        habitaciones: 4,
        costo: 3.500,
        smoke: true,
        pets: true

    },
    {
        nombre: 'Condominio rural en zona residencial',
        src: 'http://127.0.0.1:5500/propiedades_alquiler.html',
        descripcion: 'Este elegante condominio rural está ubicado en una tranquila zona residencial',
        ubicacion: 'Texas, USA',
        habitaciones: 6,
        costo: 4.200,
        smoke: false,
        pets: false

    },
    {
        nombre: 'Apartamento luminoso con terraza',
        src: 'http://127.0.0.1:5500/propiedades_alquiler.html',
        descripcion: 'Este hermoso apartamento ofrece una terraza completa',
        ubicacion: 'San francisco, USA',
        habitaciones: 2,
        costo: 1.500,
        smoke: true,
        pets: true

    },
    ]

    if (alquileres!== null){
        for(let alquiler of propiedades_alquiler){
            if(venta.smoke ==false && venta.pets ==false){
                html +=`
                <div class="col-md-4 mb-4">
                <div class="card">
                  <img
                    src="${alquiler.scr}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${alquiler.nombre}</h5>
                    <p class="card-text">${alquiler.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${venta.ubicacion}</p>
                    <p>
                      <i class="fas fa-bed"></i>${alquiler.habitaciones}
                      <i class="fas fa-bath"></i> 1 Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                    <p class="${alquiler.smoke ? "text-success":"text-danger"}">
                      <i class="fas ${alquiler.smoke ? "fa-smoking" :"fa-smoking-ban"
                     } ></i>
                     ${
                      alquiler.smoke ? "Permitido fumar" : "No se permite fumar"
                     } 
                    </p>
                    <p class="${alquiler.pets ? "text-success":"text-danger"}">
                      <i class="fas ${alquiler.pets ? "fa-paw" : "fa-ban"}"></i>
                      ${alquiler.pets ? "Mascotas permitidas" : "No se permitan mascotas"}
                    </p>
                  </div>
                </div>
              </div>












    }
}


}            