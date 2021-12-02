define(function () {
    return {
        rows: [
            {
                view: "toolbar",
                cols: [
                    {
                        view: 'button',
                        label: 'Add',
                        click: function () {
                            var carsMarkList = $$('carsMarkList')
                            var id = carsMarkList.add({})
                            carsMarkList.editRow(id)
                        }
                    }
                ]
            },
            {   id: 'carsMarkList',
                view: "datatable",
                columns: [
                    {id: "id"},
                    {id: "name", editor: "text"}
                ],
                url: "resource->/api/mark",
                save: "resource->/api/mark",
                autowidth: true,
                autoheight: true,
                editable: true
            }
        ]
    }
})