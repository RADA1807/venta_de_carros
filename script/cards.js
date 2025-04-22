console.log('Cargando cards')

const dataCards = [
    {
        "title": "Honda Civic 1.5 Turbo touring",
        "url_image": "./images/honda.JPG",
        "desc": "Transmision dual",
        "desc1": "Año 2019",
        "desc2": "como nuevo",
        "desc3": "5000 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.mx/MLM-3602343280-honda-civic-15-turbo-touring-_JM#polycard_client=search-nordic&position=8&search_layout=grid&type=item&tracking_id=166df10e-5a8f-462f-af6c-1b257fc6e5ba"
    },
    {
        "title": "BMW M4",
        "url_image": "./images/BMW.JPG",
        "desc": "Transmision Manual",
        "desc1": "Año 2024",
        "desc2": "Nunca chocado",
        "desc3": "1000 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://nachoautos.com/reviews/2024-bmw-m4"
    },
    {
        "title": "Ferrari 488 GTB 4.0 Spider At",
        "url_image": "./images/Ferrari.JPG",
        "desc": "Transmision Manual",
        "desc1": "Año 2018",
        "desc2": "2 puertas coupe",
        "desc3": "12.489 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.mx/MLM-2271117167-ferrari-488-gtb-40-spider-at-_JM#polycard_client=search-nordic&position=2&search_layout=grid&type=item&tracking_id=77599fdf-fda7-474a-b58a-a58b2a4e1470"
    },
    {
        "title": "Mercedes-Benz C 1.8 2012",
        "url_image": "./images/mercedes.JPG",
        "desc": "Transmision Automatica",
        "desc1": "5 puestos",
        "desc2": "Asegurado hasta el 2027",
        "desc3": "99.000 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.ar/MLA-1484562935-mercedes-benz-clase-c-18-c250-coupe-cgi-befficiency-at-_JM"
    },
    {
        "title": "JAGUAR PRESTIGE 2019",
        "url_image": "./images/Jaguar.JPG",
        "desc": "Transmision dual",
        "desc1": "Unico dueño",
        "desc2": "Nunca chocado",
        "desc3": "30.000 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://www.fullmotor.cl/ficha/240061/jaguar-e-pace-2019"
    },
  
    {
        "title": "Hummer H3 5.3 Alpha Mt 2008",
        "url_image": "./images/Hummer.JPG",
        "desc": "Transmision Manual",
        "desc1": "Unico dueño",
        "desc2": "Nunca chocado",
        "desc3": "100.000 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.mx/MLM-2249959169-hummer-h3-53-alpha-mt-_JM#polycard_client=search-nordic&position=1&search_layout=grid&type=item&tracking_id=5df05924-df8b-49cd-bf25-cdd963d44434"
    },
    
    {
        "title": "Corvette Supercargado 2015",
        "url_image": "./images/corvette.JPG",
        "desc": "Transmision Manual",
        "desc1": "Unico dueño",
        "desc2": "Nunca chocado",
        "desc3": "21.300 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.mx/MLM-3581790978-chevrolet-corvette-2016-aut-piel-hp-excelentes-condicion-_JM#polycard_client=search-nordic&position=2&search_layout=grid&type=item&tracking_id=f9367d1f-7f87-48cd-9483-b71a6644ac49"
    },
  
];

(function () {
    let CARD = {
        init: function () {
            this.insertData();
        },
        
        insertData: function() {
            let carousel = document.querySelector('.carousel'); // ✅ Ahora se insertan en `.carousel`
            dataCards.forEach((item, index) => {
                let angle = index * (360 / dataCards.length); // Distribuir en círculo
                carousel.insertAdjacentHTML("beforeend", this.tplCardItem(item, angle));
            });
        },

        tplCardItem: function (item, angle) {
            return(`<div class='card-item' id='card-number-${angle}' style='transform: rotateY(${angle}deg) translateZ(250px);'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    <p class='card-desc'>${item.desc}</p>
                    <p class='card-desc1'>${item.desc1}</p>
                    <p class='card-desc2'>${item.desc2}</p>
                    <p class='card-desc3'>${item.desc3}</p>
                    <a class='card-cta' target='_blank' href='${item.Link}'>${item.cta}</a>
                </div>
            </div>`);
        }
    };
    CARD.init();
})();