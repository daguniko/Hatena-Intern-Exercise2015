// 課題 JS-1: 関数 `parseLTSVLog` を記述してください
function parseLTSVLog(logStr){
	if (logStr == ""){
		var parseStr = [];
	} else {
		var parseStr = [];
		var curStr = logStr.split("\n");
		for(var i=0;i<curStr.length;i++){
			if (curStr[i] == ""){
				continue
			} else {
				console.log("curstr:"+curStr[i]);
				var parseLineStr = {};
				var epochIndex = curStr[i].indexOf("epoch:");
				var pathIndex = curStr[i].indexOf("path:");
				var epochValue = curStr[i].slice(epochIndex+"epoch:".length);
				var pathValue = curStr[i].slice(pathIndex+"path:".length,epochIndex).replace(/^\s+|\s+$/g, "");
				parseLineStr.path = pathValue;
				parseLineStr.epoch = Number(epochValue);
				parseStr.push(parseLineStr);
			}
		}
	}

	return parseStr
}

// 課題 JS-2: 関数 `createLogTable` を記述してください
