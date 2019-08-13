function OnButtonClick() {
   
    var pass;
    $(document).ready(function () {
        $.getJSON("data.json", function(data){
            pass = data;
        });
    });

    var idelist = ["output1", "output2", "output3", "output4"]
    var idtlist = ["text1", "text2", "text3", "text4"]

    for (var i; i<idelist.length; i++){
        var rand = Math.floor(Math.random() * (pass.length-1));
        target = document.getElementById(idelist[i]);
        target.innerHTML = '<img src="park/'+pass['pic']+'" alt="park1" width="100">';
        target = document.getElementById(idtlist[i]);
        target.innerHTML = pass['name'];
    }
}

