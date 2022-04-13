function permutator(inputArr) {
	const results = [];

	function permute(arr, memo) {
		let cur

		memo = memo || [];

		for (let i = 0; i < arr.length; i++) {
			cur = arr.splice(i, 1);
			if (arr.length === 0) {
				results.push(memo.concat(cur));
			}
			permute(arr.slice(), memo.concat(cur));
			arr.splice(i, 0, cur[0]);
		}

		return results;
	}

	return permute(inputArr);
}

function flipflopValidate() {
	const x = permutator([0, 1])
	// console.log(x)
	document.getElementById('error-container').style = 'display:none;';
	circuitValid = 0
	for (let i = 0; i < x.length; i++) {
		if (connectionMap.has("input0$latch" + x[i][0]) && connectionMap.has("clock0$latch" + x[i][0]) && connectionMap.has("latch" + x[i][0] + "$latch" + x[i][1]) && connectionMap.has("latch" + x[i][1] + "$output0") && connectionMap.has("clockbar0$latch" + x[i][1]) && (connectionMap.size === 5) && selectedTab === currentTab.NEG) {
			circuitValid = 1
			break
		}
		if (connectionMap.has("input0$latch" + x[i][0]) && connectionMap.has("clockbar0$latch" + x[i][0]) && connectionMap.has("latch" + x[i][0] + "$latch" + x[i][1]) && connectionMap.has("latch" + x[i][1] + "$output0") && connectionMap.has("clock0$latch" + x[i][1]) && (connectionMap.size === 5) && selectedTab === currentTab.POS) {
			circuitValid = 1
			break
		}
	}
	if (circuitValid) {
		
		let m = document.getElementById("input-selector").value;
		if (selectedTab === currentTab.NEG && m === 1) {
			document.getElementById("graph-image").src = "./images/Screenshot (169).png"
			document.getElementById("graph-image").style.display = "block";
		}
		else if (selectedTab === currentTab.NEG && m === 2) {
			document.getElementById("graph-image").src = "data:image/png;base64,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="
			document.getElementById("graph-image").style.display = "block";
		}
		else if (selectedTab === currentTab.NEG && m === 3) {
			document.getElementById("graph-image").src = "https://cse14-iiith.vlabs.ac.in/exp/d-latch-and-d-flip-flop/images/d_latch_td.jpg"
			document.getElementById("graph-image").style.display = "block";
		}
		else if (selectedTab === currentTab.NEG && m === 4) {
			document.getElementById("graph-image").src = "https://i2.wp.com/dcaclab.com/blog/wp-content/uploads/2020/05/Document-5_6.jpg?resize=2465%2C780&ssl=1"
			document.getElementById("graph-image").style.display = "block";
		}
		else if (selectedTab === currentTab.POS && m === 1) {
			document.getElementById("graph-image").src = "./images/Screenshot (169).png"
			document.getElementById("graph-image").style.display = "block";
		}
		else if (selectedTab === currentTab.POS && m === 2) {
			document.getElementById("graph-image").src = "data:image/png;base64,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="
			document.getElementById("graph-image").style.display = "block";
		}
		else if (selectedTab === currentTab.POS && m === 3) {
			document.getElementById("graph-image").src = "https://cse14-iiith.vlabs.ac.in/exp/d-latch-and-d-flip-flop/images/d_latch_td.jpg"
			document.getElementById("graph-image").style.display = "block";
		}
		else if (selectedTab === currentTab.POS && m === 4) {
			document.getElementById("graph-image").src = "https://i2.wp.com/dcaclab.com/blog/wp-content/uploads/2020/05/Document-5_6.jpg?resize=2465%2C780&ssl=1"
			document.getElementById("graph-image").style.display = "block";
		}
		changeObservation("&#10004; Circuit is correct", 'text-danger', 'text-success')
	}
	else {
		// document.getElementById("graph-image").alt = "The graph is not shown since the circuit connection is incorrect"
		document.getElementById("graph-image").src = ""
		document.getElementById("graph-image").style.display = "none";
		// alert("The circuit is wrong");
		changeObservation("&#10060; Circuit is incorrect", 'text-success', 'text-danger')
	}
}

function changeObservation(htmlText, removedClass, addedClass) {
	document.getElementById("output-text").innerHTML = htmlText
	document.getElementById("output-text").classList.remove(removedClass)
	document.getElementById("output-text").classList.add(addedClass)
}
