console.log('Cargando cards')

const dataCards = [
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
        "title": "Corvette Supercargado 2015",
        "url_image": "./images/corvette.JPG",
        "desc": "Transmision Manual",
        "desc1": "Unico dueño",
        "desc2": "Nunca chocado",
        "desc3": "21.300 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.mx/MLM-3581790978-chevrolet-corvette-2016-aut-piel-hp-excelentes-condicion-_JM#polycard_client=search-nordic&position=2&search_layout=grid&type=item&tracking_id=f9367d1f-7f87-48cd-9483-b71a6644ac49"
    },
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
        "title": "Ferrari F12 6.3I Berlinetta",
        "url_image": "./images/Ferrari1.JPG",
        "desc": "Transmision Manual",
        "desc1": "Año 2014",
        "desc2": "Nunca chocado",
        "desc3": "22.500 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.mx/MLM-3582081654-ferrari-f12-63l-berlinetta-mt-_JM#polycard_client=search-nordic&position=5&search_layout=grid&type=item&tracking_id=5c806364-1d4e-408e-adc9-0116416a8bc3"
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
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            this.insertData(_self);

        },
        insertData: function(_self) {
            dataCards.map(function(item, index) {
               document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index)); 
            });
        },

        tplCardItem: function (item, index) {
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                <p class='card-title'>${item.title}</p>
                <p class='card-desc'>${item.desc}</p>
                <p class='card-desc1'>${item.desc1}</p>
                <p class='card-desc1'>${item.desc2}</p>
                <p class='card-desc1'>${item.desc3}</p>
                <a class='card-cta' target='blank' href='${item.Link}'>${item.cta}</a>
                </div>
            </div>`)

        },
    }
    CARD.init();
})();