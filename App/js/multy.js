// ----------------------------------------------------------------------------------------
// Load data form azure : start (API)
// ----------------------------------------------------------------------------------------

var getsettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://togetherdemo.azure-api.net/calc/mul",
    "method": "GET"
}

$.ajax(getsettings).done((response) => {

    var res_html = "";
    var res_id = "";
    var res_inputA = "";
    var res_inputB = "";
    var res_result = "";
    var res_datetimeStamp = "";

    $.each(response, (key, value) => {
        res_id = JSON.stringify(value.ID);
        res_inputA = value.InputA;
        res_inputB = value.InputB;
        res_result = value.Result;
        res_datetimeStamp = value.Datetimestamp;
        res_html +=
            "<div class='alert alert-info'>" +
            "<strong> ID: " + res_id + " </strong>" +
            " (" + res_inputA + " x " + res_inputB + ") = " + res_result +
            "<span class='pull-right' style='color:blue'>" + res_datetimeStamp + "</span>" +
            "</div>";
    });

    $("#result").append(res_html);
}).fail((error) => {
    console.error(error);
    var err = "<div class='alert alert-danger'><strong>Error!! </strong>" + error.statusText + "</div>";
    $("#result").append(err);
});