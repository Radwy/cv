
$(document).ready(function() {

    $.getJSON('datas/datas.json', function(data) {
        var formations = data.formations;
        
        var template = $("#tmplFormation").html();
        
        var html = "";
        for (var i = 0; i < formations.length; i++) {
            var itemHtml = template;
            for (var key in formations[i]) {
            itemHtml = itemHtml.replace("{{" + key + "}}", formations[i][key]);
            }
            html += itemHtml;
        }
        
        $("#cardBodyFormation").append(html);
        
      
        
        
    });

  

});