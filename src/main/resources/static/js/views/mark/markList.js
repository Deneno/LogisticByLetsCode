define(['component/listPage'], function (listPage) {
    return listPage('markList',
        'resource->/api/marks',
        [
            {id: "name", editor: "text"}
        ]
    )
})