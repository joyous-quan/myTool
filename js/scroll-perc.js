var ditto = {
    // page element ids
    content_id: "#content",
    sidebar_id: "#sidebar",
    edit_id: "#edit",
    back_to_top_id: "#back_to_top",
    loading_id: "#loading",
    error_id: "#error",

    // display elements
    sidebar: true,
    edit_button: true,
    back_to_top_button: true,
    save_progress: true, // 淇濆瓨闃呰杩涘害
    search_bar: true,

    // initialize function
   // run: initialize
};


(function() {
    var perc = ditto.save_progress ? store.get('page-progress') || 0 : 0;
    var $w = $(window);
    var $prog2 = $('.progress');
    var wh = $w.height();
    var h = $('body').height();
    var sHeight = h - wh;
    $w.on('scroll', function() {
        window.requestAnimationFrame(function(){
            var perc = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
            updateProgress(perc);
        });
    });

    function updateProgress(perc) {
        $prog2.css({width: perc * 100 + '%'});
        ditto.save_progress && store.set('page-progress', perc);
    }

}());