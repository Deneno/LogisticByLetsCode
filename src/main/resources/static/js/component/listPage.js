define(function (){
    return function(tableId, url, columns) {
        return {
            rows: [
                {
                    view: "toolbar",
                    cols: [
                        {
                            view: 'button',
                            label: 'Add',
                            click: function () {
                                var carsMarkList = $$(tableId)
                                var id = carsMarkList.add({})
                                carsMarkList.editRow(id)
                            }
                        }
                    ]
                }, {
                    id: tableId,
                    view: "datatable",
                    columns: columns,
                    url: url,
                    save: url,
                    autowidth: true,
                    autoheight: true,
                    editable: true,
                    pager:"markPager",
                    datafetch: 3
                }, {
                    view: "pager",
                    id: "markPager",
                    size: 3,
                    group: 3,
                    template: "{common.first()}{common.prev()}{common.pages()}{common.next()}{common.last()}"
                }
            ]
        }
    }
})