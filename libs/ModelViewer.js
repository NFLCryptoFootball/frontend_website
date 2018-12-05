class SketchfabModelViewer
{
	constructor(iframeId, modelId)
	{
		var self = this;
		this.iframe = document.getElementById(iframeId);
		this.modelId = modelId;
		this.client = new Sketchfab(this.iframe);

		this.client.init(modelId, {
			success: function(api) {
				console.log("Success");
				self.api = api;
				api.load();
				api.start();
				api.addEventListener("viewerready", function(){
					console.log("Viewer is ready");
				});
			},
			error: function(callback) {
				console.log(this.error);
			}
		});
	}



	static CreateFrame(iframeId, classes, width, height)
	{
		let classesOutput = "";
		let widthOutput = "";
		let heightOutput = "";

		if(classes != "" && typeof(classes) != 'undefined' && classes != null)
		{
			classesOutput = 'class="' + classes + '"';
		}
		if(width != "" && typeof(width) != 'undefined' && width != null)
		{
			widthOutput = 'width="' + width + '"';
		}
		if(height != "" && typeof(height) != 'undefined' && height != null)
		{
			heightOutput = 'height="' + height + '"';
		}

		return '<iframe src="" id="' + iframeId + '" allow="autoplay; fullscreen; vr" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" ' + classesOutput + ' ' + widthOutput + ' ' + heightOutput + '></iframe>';
	}
};