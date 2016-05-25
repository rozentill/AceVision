function interpret() {
    var search = document.getElementById('search');
    var mystring = search.value;
    if(mystring!="")myjson=CallURL(mystring);
    document.getElementById('li1').innerHTML=JSON.stringify(myjson.query);
    return false;
}



function CallURL(myexpr){
    var params = {
            // Request parameters
            "query": myexpr,
            "complete": "0",
            "count": "10",
            "offset": "0",
            "timeout": "10000",
            "model": "latest",
            "Subscription-Key":"f7cc29509a8443c5b3a5e56b0e38b5a6",
        };
      
       $.ajax({
            url: "https://oxfordhk.azure-api.net/academic/v1.0/interpret?" + $.param(params),
    type: "GET",
    async:true,
     success: function (msg) {
        myjson=msg;
    },
    error: function () {
        alert("error");
    }
});
    return myjson;
}
