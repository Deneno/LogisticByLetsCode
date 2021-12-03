define(['component/listPage', 'collections/marks'], function (listPage, marks) {
    return listPage(
        'modelsList',
        'resource->/api/models',
        [
            {id: "name", editor: "text"},
            {id: "carsMark", editor: "combo", options: marks }
        ]
    )
})