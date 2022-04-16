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
		
		const imagePaths = {
			0: {
				1: "./images/Screenshot (169).png",
				2: "https://learnabout-electronics.org/Digital/images/D-Type-timing-01.gif",
				3: "https://cse14-iiith.vlabs.ac.in/exp/d-latch-and-d-flip-flop/images/d_latch_td.jpg",
				4: "https://i2.wp.com/dcaclab.com/blog/wp-content/uploads/2020/05/Document-5_6.jpg?resize=2465%2C780&ssl=1"
			},
			1: {
				1: "./images/Screenshot (169).png",
				2: "https://learnabout-electronics.org/Digital/images/D-Type-timing-01.gif",
				3: "https://cse14-iiith.vlabs.ac.in/exp/d-latch-and-d-flip-flop/images/d_latch_td.jpg",
				4: "https://i2.wp.com/dcaclab.com/blog/wp-content/uploads/2020/05/Document-5_6.jpg?resize=2465%2C780&ssl=1"
			}
		}

		let m = document.getElementById("input-selector").value;
		
		document.getElementById("graph-image").src = imagePaths[selectedTab][m]
		document.getElementById("graph-image").style.display = 'block';
		
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
