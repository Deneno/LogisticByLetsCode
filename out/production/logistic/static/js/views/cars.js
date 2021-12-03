define(['component/listPage'], function (listPage) {
    return listPage('carsList',
        'resource->/api/cars',
        [
            {id: "name", editor: "text"}
        ]
    )
})