Draw.loadPlugin(function(ui){

    mxResources.parse('redact=Redact Cells');

    ui.actions.addAction('redact', function(){
        const model = ui.editor.graph.model;
        model.beginUpdate();

        for(let id in model.cells){
            model.setValue(model.cells[id], "REDACTED");
        }

        model.endUpdate();
    });

    const menu = ui.menus.get('extras');
    const oldFunct = menu.funct;

    menu.funct = function(menu, parent){
        oldFunct.apply(this, arguments);
        ui.menus.addMenuItems(menu, ['-', 'redact'], parent);
    };
});
