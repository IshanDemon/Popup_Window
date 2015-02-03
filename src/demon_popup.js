(function($){
    $.demon_popup = function(options)
    {
        if (!options || !options.path) {
            throw new Error("options.path must not be empty");
        }
        options = $.extend({
            windowName: 'demon_popup'
          , windowOptions: 'location=0,status=0,width=800,height=400'
          , callback: function(){ window.location.reload(); }
        }, options);

        var demonWindow   = window.open(options.path, options.windowName, options.windowOptions);
        var demonInterval = window.setInterval(function(){
            if (demonWindow.closed) {
                window.clearInterval(demonInterval);
                options.callback();
            }
        }, 1000);
    };

    $.fn.demon_popup = function(options) {
        $this = $(this);
        $this.click($.demon_popup.bind(this, options));
    };
})(jQuery);

