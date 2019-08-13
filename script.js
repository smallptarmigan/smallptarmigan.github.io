function OnButtonClick() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./data.json");
    var pass = JSON.parse(xmlhttp.responseText || "null");
    console.log(pass);

    var idelist = ["output1", "output2", "output3", "output4"]
    var idtlist = ["text1", "text2", "text3", "text4"]

    for (var i; i<idelist.length; i++){
        var rand = Math.floor(Math.random() * (pass.length-1));
        target = document.getElementById(idelist[i]);
        target.innerHTML = '<img src="park/'+pass[rand]+'" alt="park1" width="100">';
        target = document.getElementById(idtlist[i]);
        target.innerHTML = pass[rand];
    }
}