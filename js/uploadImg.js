
//图片上传 e
var form_pics = (function(){
	var TPL = '<input type="file" accept="image/jpg, image/jpeg, image/png" onchange="form_pics.addImg(this);" name="pics" /><img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />';
	var fp = function(){
		this.length = 0;
		this.videoLength = 0;
		this.wrap = null;
		this.TPL = TPL;
		this.flag_new = true;
	}
	
	

	fp.prototype = {
		addImg: function(thi){
			this.wrap = this.wrap||$("#headfile");
			if(thi.files && thi.files[0]){
				//alert(thi.files[0].size);
				var img = thi.nextSibling.nextSibling;
		
				if(thi.files[0].type.indexOf("video")==-1 ){
					var URL = window.URL||webkitURL;
					var url = URL.createObjectURL(thi.files[0]);
					img.src = url;
//					thi.parentNode.className+=" "+"in";

					thi.parentNode.setAttribute("class","upload_pic in");
					thi.parentNode.setAttribute("type","image");
				}else{
					if(this.videoLength>=1){
						alert("只能上传一个视频", 1000);
						return this;
					}
					img.src = 'imgs/3.png';
					this.videoLength +=1;
					thi.parentNode.setAttribute("type","video");
				}
				this.length ++;
				this.flag_new = true;
				//this.createImgFile(thi);
				
				//thi.setAttribute("style","display:none;");
				return this;
			}
		},
		removeImg: function(thi){
			$(thi).closest("li.add").remove();
			this.length --;
			this.createImgFile(thi);
			return this;
		},
		createImgFile: function(thi){
			if(this.length>=1){
				this.length = 1;
				this.flag_new = false;
				return this;
			}
			
			if(false == this.flag_new){						
				this.wrap.append($(this.TPL) );
				this.flag_new = true;
			}
			
			return this;
			
		}
	}

	return new fp();
})();
//图片上传 e
  