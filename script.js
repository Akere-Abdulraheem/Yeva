function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
}

    // for mobile redirection
    if (screen.width <= 456){
    document.location = "b.html";
    }
    else{
        document.location = "TT.html";
    }