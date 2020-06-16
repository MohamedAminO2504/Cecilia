function redirect()
{
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    var subject = document.getElementById("subject").value;
    var corpsMail = document.getElementById("message").value.replace("\n","%0D%0A");
    var mail =      "cecilialorenz.pro@gmail.com";
    alert(corpsMail);
    window.location.href = "mailto:"+mail+"?subject="+subject+"&body="+corpsMail+"%0D%0A%0D%0Anom:"+name+"%OD%0A%0D%0Atel:"+phone+"%0D%0A%0D%0Amail: "+mail+"%0D%0A%0D%0A";

}