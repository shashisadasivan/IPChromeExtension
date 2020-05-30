// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

/*
let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
*/

let myipv4Tag = document.getElementById('myipv4');
let myipv6Tag = document.getElementById('myipv6');

fetchIp(myipv4Tag, 'https://api.ipify.org?format=json');
fetchIp(myipv6Tag, 'https://api6.ipify.org?format=json');
//let ipElement1 = document.getElementById('myipv4');

function fetchIp(elementId, ipUrl){
	//document.getElementById("myip").innerHTML = "Paragraph changed.";	
	// Create a request variable and assign a new XMLHttpRequest object to it.
	var request = new XMLHttpRequest()

	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', ipUrl, true)

	request.onload = function() {
	  // Begin accessing JSON data here
	  console.log(this.response);
	  var data = JSON.parse(this.response);
	  console.log(data);
	  console.log(data.ip);

	  //let ipElement = document.getElementById(elementId);
	  elementId.textContent = data.ip;
	  //document.getElementById(elementId).innerHTML = data.ip;
	  //document.getElementById(elementId).innerHTML = data.ip;	
	}

	// Send request
	request.send()
}
