function listSearch()   
{
    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost:8080/superheroes.php";
    httpRequest.onreadystatechange = getList;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function getList()
{
    if (this.readyState == 4 && this.status == 200) 
    {
        var response = this.responseText;
        alert(response);
    }
    else
    {
        alert("Something went wrong");
    }
}