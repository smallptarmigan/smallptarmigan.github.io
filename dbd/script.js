function OnButtonClick() {
  $(document).ready(function () {
    $.getJSON("./data.json", function(data){

      var idelist = ["output1", "output2", "output3", "output4"];
      var idtlist = ["text1", "text2", "text3", "text4"];

      var parklog = [0,0,0,0];

      for (var i=0; i<idelist.length; i++){
        var rand = Math.floor(Math.random() * (data["park_list"].length));
        target = document.getElementById(idtlist[i]);
        target.innerHTML = data["park_list"][rand]['name'];
        target = document.getElementById(idelist[i]);
        target.innerHTML = '<img src="./park/'+data["park_list"][rand]['pic']+'" alt="park" width="100">';
        parklog[i] = rand;
      }
      // console.log(parklog);
    });
  });
}

