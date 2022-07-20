function screenshot() {
    html2canvas(document.querySelector("#main")).then(canvas => {
    $('#blank').attr('href', canvas.toDataURL("image/jpg"));
    $('#blank').attr("download", "quote.jpg");
    $('#blank')[0].click();
    });
};