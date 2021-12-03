define(['component/listPage', 'collections/models'], function (listPage, models) {
    return listPage(
        'carsList',
        'resource->/api/cars',
        [
            {id: "name", editor: "text"},
            {id: "model", editor: "combo", options: models}
        ]
    )
})