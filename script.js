
    new Vue({
        el: '#app',
        data: {
            message: 'Bludiště',

            xLoop: [0, 1, 2],
            yLoop: [2, 1, 0],

            aktualniSouradnice: {
                x: 0,
                y: 0
            },

            mapa: [
                { x: 0, y: 0, name: 'Dům', img: 'images/1.jpg' },
                { x: 1, y: 0, name: 'Zahrada', img: 'images/2.jpg'  },
                { x: 2, y: 0, name: 'Louka', img: 'images/3.jpg'  },
                { x: 0, y: 1, name: 'Lesní cesta', img: 'images/4.jpg'  },
                { x: 1, y: 1, name: 'Chaloupka', img: 'images/5.jpg'  },
                { x: 2, y: 1, name: 'Rybník', img: 'images/6.jpg'  },
                { x: 0, y: 2, name: 'Ohrada', img: 'images/7.jpg'  },
                { x: 1, y: 2, name: 'Vesnice', img: 'images/8.jpg'  },
                { x: 2, y: 2, name: 'Konec', img: 'images/9.jpg'  },
            ],

        },

        methods: {

            exists: function (xOffset, yOffset) {

                return (this.getForCoords(this.aktualniSouradnice.x + xOffset, this.aktualniSouradnice.y + yOffset) != null)

            },

            getForCoords: function (x, y) {

                var karta = null

                var self = this;

                var existArray = this.mapa.filter(function (item) {
                    return item.x === x && item.y === y;
                });

                if (existArray.length == 1) {
                    karta = existArray[0]
                }

                return karta

            },

            move: function (xOffset, yOffset) {

                this.aktualniSouradnice.x += xOffset
                this.aktualniSouradnice.y += yOffset

            },
        },

        computed: {
            aktualniKarta: function () {
                var self = this;
                var aktualni = null

                var aktualniKartaArray = this.mapa.filter(function (item) {
                    return item.x === self.aktualniSouradnice.x && item.y === self.aktualniSouradnice.y;
                });

                if (aktualniKartaArray.length == 1) {
                    aktualni = aktualniKartaArray[0]
                }

                return aktualni;


            },

        },
    })