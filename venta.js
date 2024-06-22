const ventas= document.querySelector("#venta")
const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'http://127.0.0.1:5500/propiedades_ventas.html',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: 5.000,
    smoke: false,
    pets: false
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'http://127.0.0.1:5500/propiedades_ventas.html',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1.200,
        smoke: true,
        pets: true
     },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'http://127.0.0.1:5500/propiedades_ventas.html',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4.500,
        smoke: false,
        pets: true

    },
    {
        nombre: 'Casa ubicada en medio del bosque',
        src: 'http://127.0.0.1:5500/propiedades_ventas.html',
        descripcion: 'Este casa de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: 'Kansas, USA',
        habitaciones: 4,
        costo: 5.000,
        smoke: true,
        pets: false

    },
    {
        nombre: 'Apartamento iluminado en zona residencial',
        src: 'http://127.0.0.1:5500/propiedades_alquiler.htmlhttp://127.0.0.1:5500/propiedades_ventas.html',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: 'New York, USA',
        habitaciones: 3,
        costo: 6.000,
        smoke: false,
        pets: false

    },
    {
        nombre: 'Apartamento en campo',
        src: 'http://127.0.0.1:5500/propiedades_ventas.html',
        descripcion: 'Este apartamento acogedor está situado en medio de un campo',
        ubicacion: 'Arcansas city, USA',
        habitaciones: 1,
        costo: 2.200,
        smoke: true,
        pets: true

    },
    {
        nombre: 'Casona de campo con terraza',
        src: 'http://127.0.0.1:5500/propiedades_ventas.html',
        descripcion: 'Este hermoso apartamento ofrece una terraza compEsta casona de campo ofrece una terraza panorámica.',
        ubicacion: 'Merida, USA',
        habitaciones: 2,
        costo: 3.500,
        smoke: false,
        pets: true

    },
    ]


if (ventas!== null){
for(let venta of propiedades_venta){
    if(venta.smoke ==false && venta.pets ==false){
        html +=`
    <div class="col-md-4 mb-4">
                <div class="card">
                  <img
                    src="${venta.scr}"
                    class="card-img-top"
                    alt="Imagen del departamento"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${venta.nombre}</h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${venta.ubicacion}</p>
                    <p>
                      <i class="fas fa-bed"></i>${venta.habitaciones}
                      <i class="fas fa-bath"></i> 1 Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                    <p class="${venta.smoke ? "text-success":"text-danger"}">
                      <i class="fas ${venta.smoke ? "fa-smoking" :"fa-smoking-ban"
                     } ></i>
                     ${
                      venta.smoke ? "Permitido fumar" : "No se permite fumar"
                     } 
                    </p>
                    <p class="${venta.pets ? "text-success":"text-danger"}">
                      <i class="fas ${venta.pets ? "fa-paw" : "fa-ban"}"></i>
                      ${venta.pets ? "Mascotas permitidas" : "No se permitan mascotas"}
                    </p>
                  </div>
                </div>
              </div>












    }
}


}
    