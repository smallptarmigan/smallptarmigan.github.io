function OnButtonClick() {
  var arr; 

  $(document).ready(function () {
    $.getJSON("https://smallptarmigan.github.io/data.json", function(data){
      arr = data["park_list"];
    });
  });

  for(var i; i<arr.length; i++){
    console.log(arr[i])
  }

  var idelist = ["output1", "output2", "output3", "output4"]
  var idtlist = ["text1", "text2", "text3", "text4"]

  for (var i; i<idelist.length; i++){
    var rand = Math.floor(Math.random() * (arr.length));
    target = document.getElementById(idelist[i]);
    target.innerHTML = '<img src="https://smallptarmigan.github.io/park/'+arr['pic']+'" alt="park1" width="100">';
    target = document.getElementById(idtlist[i]);
    target.innerHTML = arr['name'];
  }

  console.log("click")
}

