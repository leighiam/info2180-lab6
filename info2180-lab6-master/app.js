/*function listSearch()   
{
    var httpRequest = new XMLHttpRequest();
    //var url = "http://localhost:8080/superheroes.php";
    httpRequest.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)  
        {
            //var response = httpRequest.responseText;
            alert(this.responseText);
        }
      //  else
      //  {
            //alert("Something went wrong");
       //     alert("Something went wrong");
            //console.log(this.readyState);
      //  }
    }
    httpRequest.open('GET', "http://localhost:8080/superheroes.php", true);
    httpRequest.send();
}*/



function displayList()
{
    var btn = document.getElementById("search");
    btn.onclick = function(){
    document.getElementById('result').innerHTML = "";
    var str = document.getElementById("input").value;
    var httpRequest2 = new XMLHttpRequest();
    httpRequest2.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            if(this.response!="")
            {
                document.getElementById('result').innerHTML = this.responseText;
            }
            else if(this.response=="")
            {
                document.getElementById('result').innerHTML = "<p id=\"p\"> superhero not found</p>";
            }
        }
    }
    httpRequest2.open('GET', "http://localhost:8080/superheroes.php?query=" + str, true);
    httpRequest2.send();
}
}
window.onload = displayList;