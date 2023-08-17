var images_data;
var images_array = [];

var images_data_loading;
var images_array_loading = [];

function parse_images(item) {
    images_array[item.name] = item.data;
}

function parse_images_loading(item) {
    images_array_loading[item.name] = item.data;
}

var freload_images_state = 0;

var xhttp = new XMLHttpRequest();
xhttp.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
			}catch(e)
			{
				
			}
		} else {
			
		}
    }
	xhttp2.open("GET", "images2.json", true);
	xhttp2.send();
};

xhttp.addEventListener("error", function(evt){
	xhttp2.open("GET", "images2.json", true);
	xhttp2.send();
}
);
xhttp.addEventListener("abort", function(evt){
	xhttp2.open("GET", "images2.json", true);
	xhttp2.send();
}
);

var xhttp2 = new XMLHttpRequest();
xhttp2.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
			}catch(e)
			{
				
			}
		} else {
			
		}
    }
	xhttp3.open("GET", "images3.json", true);
	xhttp3.send();
};

xhttp2.addEventListener("error", function(evt){
	xhttp3.open("GET", "images2.json", true);
	xhttp3.send();
}
);
xhttp2.addEventListener("abort", function(evt){
	xhttp3.open("GET", "images2.json", true);
	xhttp3.send();
}
);

var xhttp3 = new XMLHttpRequest();
xhttp3.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
			}catch(e)
			{
				
			}
		} else {
			
		}
    }
	xhttp4.open("GET", "images4.json", true);
	xhttp4.send();
};

xhttp3.addEventListener("error", function(evt){
	xhttp4.open("GET", "images2.json", true);
	xhttp4.send();
}
);
xhttp3.addEventListener("abort", function(evt){
	xhttp4.open("GET", "images2.json", true);
	xhttp4.send();
}
);

var xhttp4 = new XMLHttpRequest();
xhttp4.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data = JSON.parse(this.response);
				images_data.forEach(parse_images);
			}catch(e)
			{
			}
		} else {
			
		}
    }
	freload_images_state = 1;
};

xhttp4.addEventListener("error", function(evt){
	freload_images_state = 1;
}
);
xhttp4.addEventListener("abort", function(evt){
	freload_images_state = 1;
}
);

var xhttp_loading = new XMLHttpRequest();
xhttp_loading.onload = function() {
	if (this.readyState === 4) 
	{
		
		if (this.status === 200) {
			try
			{
				images_data_loading = JSON.parse(this.response);
				images_data_loading.forEach(parse_images_loading);
			}catch(e)
			{
				
			}
		} else {	
		}
		
    }
	// run c2
	var script = document.createElement('script');
	script.setAttribute('src', 'c2runtime.js');
	script.onload = function() {
		// window.alert('onload c2runtime');
		console.log('onload c2runtime');
		createC2canvas();
		xhttp.open("GET", "images1.json", true);
		xhttp.send();
	}
	document.body.appendChild(script);
    
    //
};

xhttp_loading.addEventListener("error", function(evt){
	// run c2
	var script = document.createElement('script');
	script.setAttribute('src', 'c2runtime.js');
	script.onload = function() {
		// window.alert('onload c2runtime');
		console.log('onload c2runtime');
		createC2canvas();
		xhttp.open("GET", "images1.json", true);
		xhttp.send();
	}
	document.body.appendChild(script);
}
);
xhttp_loading.addEventListener("abort", function(evt){
	// run c2
	var script = document.createElement('script');
	script.setAttribute('src', 'c2runtime.js');
	script.onload = function() {
		// window.alert('onload c2runtime');
		console.log('onload c2runtime');
		createC2canvas();
		xhttp.open("GET", "images1.json", true);
		xhttp.send();
	}
	document.body.appendChild(script);
}
);

xhttp_loading.open("GET", "images_loading.json", true);
xhttp_loading.send();

Image = (function(org) {
    return function() {
        var result = new org;
        Object.defineProperty(result, 'src', {
            set: function(srcAttr) {
                result.setAttribute('_src', srcAttr);
                // console.log(srcAttr);
                if (images_array[srcAttr] != null) {
                    result.setAttribute('src', 'data:image/png;base64,' + images_array[srcAttr]);
                } else if (images_array_loading[srcAttr] != null){
					//console.log("000000000000 loading pack");
					result.setAttribute('src', 'data:image/png;base64,' + images_array_loading[srcAttr]);
				}else {
                    result.setAttribute('src', srcAttr);
                }
            },
            get: function() {
                return result.getAttribute('_src');
            }
        });
        return result;
    };
}(Image));