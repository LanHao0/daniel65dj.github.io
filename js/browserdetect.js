//a simple check for Internet Explorer: use conditional comments in the HTML to set this to the version number
//let IEVersion;

//PPK's browser detect script, modified
//http://www.quirksmode.org/js/detect.html
let BrowserDetect = function()
{
	//***** private properties and methods *****//

	let versionSearchString;
	function searchString(data)
	{
		let dataString, dataProp;
		for(let i=0; i<data.length; i++)
		{
			dataString = data[i].string;
			dataProp = data[i].prop;
			versionSearchString = data[i].versionSearch || data[i].identity;
			if(dataString)
			{
				if(dataString.indexOf(data[i].subString) != -1) return data[i].identity;
			}
			else if(dataProp) return data[i].identity;
		}
	}
	function searchVersion(dataString)
	{
		let index = dataString.indexOf(versionSearchString);
		if(index == -1) return;
		return parseFloat(dataString.substring(index+versionSearchString.length+1));
	}

	let dataBrowser = [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{
			string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Internet Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	];
	let dataOS = [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	];

	//***** public properties and methods *****//

	return {
		browser: searchString(dataBrowser) || "",
		version: searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || "",
		OS: searchString(dataOS) || ""
	};
}();	//initialize BrowserDetect
