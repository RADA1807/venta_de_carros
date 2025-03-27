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
        "Link": "https://www.encuentra24.com/costa-rica-es/autos-usados/sin-prima/30054855"
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
        "desc3": "21.30000 kilometros",
        "cta": "Mostrar más...",
        "Link": "https://auto.mercadolibre.com.mx/MLM-3581790978-chevrolet-corvette-2016-aut-piel-hp-excelentes-condicion-_JM#polycard_client=search-nordic&position=2&search_layout=grid&type=item&tracking_id=f9367d1f-7f87-48cd-9483-b71a6644ac49"
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