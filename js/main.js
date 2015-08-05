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
function createLogTable(divDom,parseStr){
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var thTr = document.createElement("tr");
	var tbTr = [];
	var thTh = [];
	var thTrTextNode = [];
	var tbTrEpochTextNode = [];
	var tbTrPathTextNode = [];
	var tbTrTdPath = [];
	var tbTrTdEpoch = [];
	var th = document.createElement("th");
	var td = document.createElement("td");
	divDom.appendChild(table);
	table.appendChild(thead);
	table.appendChild(tbody);
	thead.appendChild(thTr);

	// append for thead
	for(var i=0;i<Object.keys(parseStr[0]).length;i++){
		thTh[i] = document.createElement("th");
		thTr.appendChild(thTh[i]);
		thTrTextNode[i] = document.createTextNode(Object.keys(parseStr[0])[i]);
		thTh[i].appendChild(thTrTextNode[i]);
	}

	// append for tbody
	for(var i=0;i<parseStr.length;i++){
		tbTr[i] = document.createElement("tr");
		tbTrTdPath[i] = document.createElement("td");
		tbTrTdEpoch[i] = document.createElement("td");
		tbody.appendChild(tbTr[i]).appendChild(tbTrTdPath[i]);
		tbTr[i].appendChild(tbTrTdEpoch[i]);
		tbTrEpochTextNode[i] = document.createTextNode(parseStr[i].epoch);
		tbTrPathTextNode[i] = document.createTextNode(parseStr[i].path);
		tbTrTdEpoch[i].appendChild(tbTrEpochTextNode[i]);
		tbTrTdPath[i].appendChild(tbTrPathTextNode[i]);
		console.log(tbTr[i]);
	}
}

// <table>
//   <thead><tr><th>path</th><th>epoch</th></tr></thead>
//   <tbody>
//     <tr><td>/</td><td>200000</td></tr>
//     <tr><td>/help</td><td>300000</td></tr>
//     <tr><td>/</td><td>250000</td></tr>
//   </tbody>
// </table>
