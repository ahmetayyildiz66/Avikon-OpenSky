exports.parseFunc = function parse(data){
    var results = []
    for(var i = 0; i<data.length; i++){
        results.push([data[i][1],data[i][2],data[i][5],data[i][6],data[i][8],data[i][9]])
    }
    return results;
}