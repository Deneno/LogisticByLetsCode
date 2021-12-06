define(["component/dialogPage", "collections/marks"], function (dialogPage, marks) {
    return dialogPage(
        'modelDialog',
        'resource->/api/models',
        [
            {id: "name"},
            {id: "mark", options: marks }
        ]
    )
})