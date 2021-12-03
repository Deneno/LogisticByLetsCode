define(['component/listPage'], function (listPage) {
    return listPage('marksList',
        'resource->/api/marks',
        [
            {id: "name", editor: "text"}
        ]
    )
})