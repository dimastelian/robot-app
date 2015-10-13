if(!App.templates){
    App.templates = {};
}

App.templates.window = {
    header: '<div class="window-header clearfix">\
                        <div class="window-title">\
                            Window Title Here\
                        </div>\
                        <div class="window-buttons">\
                            <a href="#" class="window-minimize">_</a>\
                            <a href="#" class="window-maximize">[]</a>\
                            <a href="#" class="window-close">X</a>\
                        </div>\
                </div>',

    body_start: '<div class="window-body">',

    body_end: '</div>\
                <div class="window-footer">\
                </div>'
};