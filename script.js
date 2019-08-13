function OnButtonClick() {
   
    var data;
    $(document).ready(function () {
        $.getJSON("https://smallptarmigan.github.io/data.json", function(d){
            var
                ulObj = $("#demo"),
                len = data.length;

            for(var i = 0; i < len; i++) {
                ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].name));
            }
        });
    });

    //data = data["park_list"]

    var idelist = ["output1", "output2", "output3", "output4"]
    var idtlist = ["text1", "text2", "text3", "text4"]

    for (var i; i<idelist.length; i++){
        var rand = Math.floor(Math.random() * (data.length-1));
        target = document.getElementById(idelist[i]);
        target.innerHTML = '<img src="park/'+data['pic']+'" alt="park1" width="100">';
        target = document.getElementById(idtlist[i]);
        target.innerHTML = data['name'];
    }
}

