$('#main').fullpage({
    onLeave:function(origin,destination,direction){
        let idx = destination.index;
        if (idx===1 || idx===3) {
            $("body").addClass("white");
        }else{
            $("body").removeClass("white");
        }
    }
});