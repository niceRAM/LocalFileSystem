var fileapisupported = false;

var search = function (data, searchstring, fname) {

    var data = data.split("~");
    if (pos > 0) {
        $("#result").html(
    }
}


var readfiles = function () {
    var filelist = $("#filename").prop("files");
    var totcontent = "";

    for (var i = 0; i < filelist.length; i++) {
        var file = filelist[i];

        if (!file.type.match('plain')) continue;

        var fr = new FileReader();
        fr.onload = function (evt) {
            var data = evt.target.result;

            search(data, $("#searchparm"), file.name);


        };


        fr.readAsText(file);

    }


}



$("#searchbtn").click(function () {

    if (fileapisupported) {
        readfiles();
    }


});


$(document).ready(function () {


    if (window.File && window.FileReader && window.FileList && window.Blob) {
        fileapisupported = true;

    } else {
        alert('The File APIs are not fully supported in this browser.');
        return;
    }

});
