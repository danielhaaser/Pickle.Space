window.onload = function () {

   var svgObj = document.getElementById("cucumber");
   var svgdoc;

   try {
      svgdoc = svgObj.contentDocument;
   } catch(e) {
      try {
         svgdoc = svgObj.getSVGDocument();
       } catch (e) {
          console.log("SVG in object not supported in your environment");
          console.log(e);
       }
   }

   if (!svgdoc) return;

   var shadow = svgdoc.getElementById("shadow_1_");
   var cucumber = svgdoc.getElementById("cucumber");

   // cucumber.style.transform = "translateY(-1000px)";
   // this is necessary because chrome's user agent style sheet sets the
   // transform-origin to 0 0 0
   shadow.style.transformOrigin = "50% 50% 0";

   Velocity(cucumber, {
   	translateY: [0.0, -1000.0]
   }, 1000);

   Velocity(shadow, {
   	opacity: [0.7, 0.0],
   	scale: [1.0, 0.1]
   }, 1000);
};