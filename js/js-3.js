// 課題 JS-3 の実装をここに記述してください。
window.onload = function() {
	document.getElementById("submit-button").onclick = function(){
		var parseStr = parseLTSVLog(document.getElementById("log-input").value);
		createLogTable(document.getElementById("table-container"),parseStr);
	}
};
