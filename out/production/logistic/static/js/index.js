requirejs.config({
    baseUrl:'js'
})

function  buildRoute(view) {
    return function () {
        webix.ui({
            id: 'root',
            rows: [view]
        }, $$("root"))
    }
}

function buildButton(label, route) {
    return {
        view: "button",
        value: label,
        width: 100,
        align: "center",
        click: function () {
            routie(route)
        }
    };
}

require(
    [
        'views/main',
        'views/car/carList',
        "views/mark/markList",
        "views/model/modelList",
        "util/resourceProxy"
    ],
    function (main, cars, marks, models, resourceProxy) {
    webix.ready(function () {
        webix.ui({
            container:"app",
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            rows: [
                {
                    view: "toolbar",
                    cols: [
                        buildButton("Home", ""),
                        buildButton("Marks", "marks"),
                        buildButton("Cars", "cars"),
                        buildButton("Models", "models")
                    ]
                },
                {id: "root"}
            ]
        })
    })
    routie({
        '': buildRoute (main),
        'cars': buildRoute (cars),
        'marks': buildRoute (marks),
        'models': buildRoute (models)
    })
})
