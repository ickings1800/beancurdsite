function switchImg(img_src, img_alttext) {
	var large_img = document.getElementById("large-img");
	
	large_img.src = img_src;
	large_img.alt = img_alttext;
}