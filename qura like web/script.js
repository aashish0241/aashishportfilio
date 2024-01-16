function displayQuestion() {
	var question = document.getElementById("question").value;
	var display = document.getElementById("display");
	display.innerHTML = "<p>Your question: " + question + "</p>";
}
function displayQuestion() {
	var question = document.getElementById("question").value;
	var display = document.getElementById("display");
	display.innerHTML = "<p>Your question: " + question + "</p>";
}

function addComment() {
	var comment = document.getElementById("comment").value;
	var commentList = document.getElementById("comment-list");
	var li = document.createElement("li");
	li.innerHTML = "<p class='comment'>" + comment + "</p>";
	commentList.appendChild(li);
	document.getElementById("comment").value = "";
}
