
/*
----------------------------------------------------------------------------------------------------------
*  Se registra un componente para generar una posición nueva para cada participante nuevo, la posición   *
*  se genera de forma aleatoria. [by David Erira - NINUS - 18/11/2020]                                   *
----------------------------------------------------------------------------------------------------------
*/
AFRAME.registerComponent('spawn-in-circle', {
    schema: {
        radius: {type: 'number', default: 1}
    },
    
    init: function() {
        var el = this.el;
        var center = el.getAttribute('position');
    
        var angleRad = this.getRandomAngleInRadians();
        var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
        var worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
        el.setAttribute('position', worldPoint);
        // console.log('world point', worldPoint);
    
        var angleDeg = angleRad * 180 / Math.PI;
        var angleToCenter = -1 * angleDeg + 90;
        var angleRad = THREE.Math.degToRad(angleToCenter);
        el.object3D.rotation.set(0, angleRad, 0);
        // console.log('angle deg', angleDeg);
    },
    
    getRandomAngleInRadians: function() {
        return Math.random()*Math.PI*2;
    },
    
    randomPointOnCircle: function (radius, angleRad) {
        var x = Math.cos(angleRad)*radius;
        var y = Math.sin(angleRad)*radius;
        return {x: x, y: y};
    }
    });


    // se puede detecar si se esta en desde un celular
    var isMobile = AFRAME.utils.device.isMobile();

    if (isMobile) {
    var particles = document.getElementById('particles');
    particles.parentNode.removeChild(particles);


    }

  

  /*   funciones de NINUS -------------------------------------------------------------------------------------------- */
    
    function myFunction() {
        var x = document.getElementById("myDIV");
        var img1 = "https://i.ibb.co/qCP7qrf/ocultar-video.png";
        var img2 = "https://i.ibb.co/ZWGP6VH/ver-video.png";
        var imgElement = document.getElementById('toggleImage');
      
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        
        imgElement.src = (imgElement.src === img1)? img2 : img1;
      }

      function myFunction2() {
        var x = document.getElementById("myDIV2");
        var img1 = "https://i.ibb.co/KDsKdXf/ver-guia.png";
        var img2 = "https://i.ibb.co/Mk45KKj/ocultar-guia.png";
        var imgElement = document.getElementById('toggleImage3');
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        imgElement.src = (imgElement.src === img1)? img2 : img1;
      }


      function myFunction3() {
        var x = document.getElementById("myDIV3");
        var img1 = "https://i.ibb.co/qCP7qrf/ocultar-video.png";
        var img2 = "https://i.ibb.co/ZWGP6VH/ver-video.png";
        var imgElement = document.getElementById('toggleImage2');
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        imgElement.src = (imgElement.src === img1)? img2 : img1;
      }


      function myFunction4() {
        var x = document.getElementById("myDIV4");
        var img1 = "https://i.ibb.co/KDsKdXf/ver-guia.png";
        var img2 = "https://i.ibb.co/Mk45KKj/ocultar-guia.png";
        var imgElement = document.getElementById('toggleImage4');
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
         imgElement.src = (imgElement.src === img1)? img2 : img1;
      }

      /*   funciones de NINUS -------------------------------------------------------------------------------------------- */