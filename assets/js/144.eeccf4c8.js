(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{364:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[i("em",[e._v("This page contains excerpts from the "),i("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image Optimization"),i("OutboundLink")],1),e._v(" article on Google Developers web site.")])]),e._v(" "),i("p",[e._v("Images often account for most of the downloaded bytes on a web page and also often occupy a significant amount of visual space.")]),e._v(" "),i("p",[e._v("Image optimization is the process of eliminating, replacing or decreasing the size of an image while still maintaining acceptable quality and visual effect of the site.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("In some situations, it is possible to eliminate an image or replace it by using a combination of HTML, CSS, and JavaScript. Some techniques include using CSS effects (gradients and shadows), web animations and web fonts in place of images. So it is important to ask yourself if each image is truly required or if it can be replaced using an existing web technology.")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("A vector graphic, like a Scalable Vector Graphics (SVG), is created using lines, points and polygons to represent an image. Vector formats are ideally suited for images that consist of simple geometric shapes (for example, logos, text, and icons). They are also resolution-independent, which means they can be scaled without any lose of quality, which makes them an ideal format for the high-resolution screens and assets that need to be displayed at varying sizes. Vectors do not work well with complex images like a photo.")]),e._v(" "),i("p",[e._v("A raster graphic is a series of pixels placed in a rectangular grid. Common raster image formats include GIF, PNG, JPEG, and WebP. Raster images are not resolution independent and will lose quality as the image is scaled up or zoomed. Raster images work best used with complex images like photos.")]),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("The most widely supported and used vector format is Scalable Vector Graphics (SVG), which is an XML-based image format for two-dimensional graphics: we can embed the SVG markup directly on the page, or as an external resource.")]),e._v(" "),i("p",[e._v("While it is also possible to create a SVG by hand using a text editor, most vector-based drawing software, like Adobe Illustrator, will also import and export to SVG. When exporting an SVG from one of these applications, the SVG can contain a lot of unnecessary metadata. So, it is always a good idea to minify your SVG files by selecting the Minify option or using an external minifier, like "),i("a",{attrs:{href:"https://vecta.io/nano",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nano"),i("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(4),e._v(" "),i("p",[e._v("Because a raster image is a 2-dimensional grid of individual pixels, the more pixels an image contains, the larger the file size will be. So the first step to optimizing a raster image is to choose a correct resolution.")]),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("In the world of the high-resolution screens of various sizes it can be difficult to know what the correct resolution of an image should be, and often it will not be only one answer. This is where "),i("router-link",{attrs:{to:"/content/responsive-images/"}},[e._v("Responsive Images")]),e._v(" come in. But before any of that, it is important to under how High-Resolution screens affect pixels.")],1),e._v(" "),i("p",[e._v("When we talk about image pixels, we need to distinguish between different kinds of pixels: CSS pixels and device pixels. A single CSS pixel may contain multiple device pixels - for example, a single CSS pixel may correspond directly to a single device pixel, or may be backed by multiple device pixels. This can pose a problem for raster images as the resolution of the image will need to increase to maintain the quality, thus increasing the overall size. For example, a screen that has a 2x screen resolution will require an image that is 4 times the size of the standard screen, a 3x screen resolution, 9 times the image size. Put another way, an image that is 100px by 100px will need to be 900px by 900px to appear at the same quality.")]),e._v(" "),e._m(6),e._v(" "),i("p",[e._v('For certain types of data, such as source code for a page, or an executable file, it is critical that a compressor does not alter or lose any of the original information: a single missing or wrong bit of data could completely change the meaning of the contents of the file, or worse, break it entirely. For some other types of data, such as images, audio, and video, it may be perfectly acceptable to deliver an "approximate" representation of the original data.')]),e._v(" "),i("p",[e._v("In fact, due to how the eye works, we can often get away with discarding some information about each pixel in order to reduce the filesize of an image - for example, our eyes have different sensitivity to different colors, which means that we can use fewer bits to encode some colors. As a result, a typical image optimization pipeline consists of two high level steps:")]),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("The first step is optional, and the exact algorithm will depend on the particular image format, but it is important to understand that any image can undergo a lossy compression step to reduce its size. In fact, the difference between various image formats, such as GIF, PNG, JPEG, and others, is in the combination of the specific algorithms they use (or omit) when applying the lossy and lossless steps.")]),e._v(" "),e._m(8),e._v(" "),i("p",[e._v('In addition to different lossy and lossless compression algorithms, different image formats support different features such as animation and transparency (alpha) channels. As a result, the choice of the "right format" for a particular image is a combination of desired visual results and functional requirements.')]),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("There are three universally supported image formats: GIF, PNG, and JPEG. In addition to these formats, some browsers also support newer formats such as WebP and JPEG XR, which offer better overall compression and more features. So, which format should you use?")]),e._v(" "),e._m(10),e._v(" "),i("p",[e._v("GIF limits the color palette to at most 256 colors, which makes it a poor choice for most images. Further, PNG-8 delivers better compression for images with a small palette. As a result, GIF is the right answer only when animation is required.")]),e._v(" "),e._m(11),e._v(" "),i("p",[e._v("PNG does not apply any lossy compression algorithms beyond the choice of the size of the color palette. As a result, it will produce the highest quality image, but at a cost of significantly higher filesize than other formats. Use judiciously.")]),e._v(" "),i("p",[e._v("If the image asset contains imagery composed of geometric shapes, consider converting it to a vector (SVG) format!")]),e._v(" "),i("p",[e._v('If the image asset contains text, stop and reconsider. Text in images is not selectable, searchable, or "zoomable". If you need to convey a custom look (for branding or other reasons), use a web font instead.')]),e._v(" "),e._m(12),e._v(" "),i("p",[e._v("JPEG uses a combination of lossy and lossless optimization to reduce filesize of the image asset. Try several JPEG quality levels to find the best quality vs. filesize tradeoff for your asset.")]),e._v(" "),i("p",[e._v("Finally, once you've determined the optimal image format and its settings for each of your assets, consider adding an additional variant encoded in WebP and JPEG XR. Both of these formats are new, and unfortunately are not (yet) universally supported by all browsers, but they can nonetheless provide significant savings for newer clients - for example, on average, WebP delivers a 30% filesize decrease over a comparable JPEG image.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"image-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-optimization","aria-hidden":"true"}},[this._v("#")]),this._v(" Image Optimization")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"eliminating-and-replacing-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eliminating-and-replacing-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Eliminating and Replacing Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"vector-vs-raster-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vector-vs-raster-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Vector vs. Raster Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"optimizing-vector-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-vector-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing Vector Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"optimizing-raster-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimizing-raster-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Optimizing Raster Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"high-resolution-screens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#high-resolution-screens","aria-hidden":"true"}},[this._v("#")]),this._v(" High Resolution Screens")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"lossless-vs-lossy-image-compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lossless-vs-lossy-image-compression","aria-hidden":"true"}},[this._v("#")]),this._v(" Lossless vs Lossy Image Compression")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v('Image is processed with a "lossy" filter that eliminates some pixel data')]),this._v(" "),t("li",[this._v('Image is processed with a "lossless" filter that compresses the pixel data')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"raster-image-formats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raster-image-formats","aria-hidden":"true"}},[this._v("#")]),this._v(" Raster Image Formats")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Format")]),e._v(" "),i("th",[e._v("Transparency")]),e._v(" "),i("th",[e._v("Animation")]),e._v(" "),i("th",[e._v("Support")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("GIF")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("All")])]),e._v(" "),i("tr",[i("td",[e._v("PNG")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("No")]),e._v(" "),i("td",[e._v("All")])]),e._v(" "),i("tr",[i("td",[e._v("JPEG")]),e._v(" "),i("td",[e._v("No")]),e._v(" "),i("td",[e._v("No")]),e._v(" "),i("td",[e._v("All")])]),e._v(" "),i("tr",[i("td",[e._v("JPEG XR")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("IE, Edge")])]),e._v(" "),i("tr",[i("td",[e._v("WebP")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Yes")]),e._v(" "),i("td",[e._v("Chrome, Opera, Android, Edge, Firefox")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Do you need animation? If so, GIF is the only universal choice.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Do you need to preserve fine detail with highest resolution? Use PNG.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Are you optimizing a photo, screenshot, or a similar image asset? Use JPEG.")])])}],!1,null,null,null);t.default=s.exports}}]);