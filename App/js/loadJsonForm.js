
// -----------------------------------------------------------------------------------------------------------------------------
// Load form.io functions                                                                                        loadJsonForm.js 
// -----------------------------------------------------------------------------------------------------------------------------

var arrForm = [];
var myForm =
    [
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" },
        { "name": "fixedform" }
    ];

jQuery.each(myForm, function (i, val) {
    arrForm.push(loadForm(val.name));
});

var url = "https://jpetchan-cdn-token.azurewebsites.net/api/cdntoken2"
//var cdn = loadcdn();
var json = null;
var getsetting = {
    'async': false,
    'global': false,
    'url': url,
    'dataType': "json",
    "method": "GET"
}
$.ajax(getsetting).done(function (data) {
    console.log(data);
});

function loadForm(JsonFileName) {
    var url = "./Json/" + JsonFileName + ".json"
    //var cdn = loadcdn();
    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        "method": "GET"
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}

function loadcdn() {
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJLVmN1enFBaWRPTHFXU2FvbDd3Z0ZSR0NZbyIsImtpZCI6IjJLVmN1enFBaWRPTHFXU2FvbDd3Z0ZSR0NZbyJ9.eyJhdWQiOiJjMzRiNDlmMS0yY2Q1LTQwMGYtODNjMi0zN2Y2ZWZhOWM2M2IiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zZTBiNmNiZC00OTU5LTRkMDEtODFiZi1jZTg4M2RkYWJkOTYvIiwiaWF0IjoxNTEwMTkzOTE0LCJuYmYiOjE1MTAxOTM5MTQsImV4cCI6MTUxMDE5NzgxNCwiYWlvIjoiWTJOZ1lDaTZldW1GMXNQeW9FOS90TGhVR3JRY1Nnei9ucy85cWhmVGR1SE5oSWp3YVlvQSIsImFtciI6WyJwd2QiXSwiZmFtaWx5X25hbWUiOiJQZXRjaGFuIiwiZ2l2ZW5fbmFtZSI6Ikpha2FwYW4iLCJpcGFkZHIiOiIxMDEuMTA5LjEwOC44MCIsIm5hbWUiOiJQZXRjaGFuIEpha2FwYW4gLSBUb2dldGhlciBUSCIsIm5vbmNlIjoiZWFhM2QzZDUtMjU0MS00ZWMwLTk2ZjAtNWNmMTQ2NDNiMjYxIiwib2lkIjoiZDAxYTY4MTctMjU0Mi00NDI2LTg5YTUtZDJiMzc0NTJlM2NjIiwic3ViIjoiZlVjOEVkMVNnbi1LNHl3SmFYUkNBX0ZpclZqQVNvUmVGc01pRnFzVWVyTSIsInRpZCI6IjNlMGI2Y2JkLTQ5NTktNGQwMS04MWJmLWNlODgzZGRhYmQ5NiIsInVuaXF1ZV9uYW1lIjoiai5wZXRjaGFuQHRvZ2V0aGVydGVhbS5jby50aCIsInVwbiI6ImoucGV0Y2hhbkB0b2dldGhlcnRlYW0uY28udGgiLCJ2ZXIiOiIxLjAifQ.x13V8wmN94N4G9f8JiWytRL7uFQTC8W-L1caw4xN4mddcPv0SyD2C6JxYp-dcmCUApSJUW-ye3LlLSr_H4OimtLme8jWnqLOO8AiOf7-zGkuIsiIZHELvyoXgmr0tSFxl9MpsoW1rnoB8BzKsxCjLrXhJpFgm_2SwsvvIVfQiY80aJoOt5cDQ-NlDkJDcsQH2ArrUkSFyzNfHaZ9U6AY7tKGks2-7DDgLyL_bzVJJMxAbd0YsgYlX99M69KS0VzMOWamN_TRlwb2HD87yNT9rd12h9CiTP2G2TUPPJzVP0q6SO7sllPuG4LyP6FJ7JH1rTpil8ZHPZJGTbjenNi1mg";
    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': "https://jpetchan-oriurl.azurewebsites.net/api/cdntoken",
        'dataType': "json",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, Authorization",
            "Authorization": "Bearer " + token
        }
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}