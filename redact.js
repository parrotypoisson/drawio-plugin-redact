Draw.loadPlugin(function(ui){

    mxResources.parse('redact=Redact Cells');

    ui.actions.addAction('redact', function(){
        var model = ui.editor.graph.model;
        model.beginUpdate();

        for(var id in model.cells){
            model.setValue(model.cells[id], "REDACTED");
        }

        model.endUpdate();
    });

    var menu = ui.menus.get('extras');
    var oldFunct = menu.funct;

    menu.funct = function(menu, parent){
        oldFunct.apply(this, arguments);
        ui.menus.addMenuItems(menu, ['-', 'redact'], parent);
    };
});
