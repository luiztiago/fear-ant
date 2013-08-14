var App = (function () {

	return {
		interval: null,
		setup: function(){
			var _self = this;
			document.querySelector('form').addEventListener('submit', function(e){
				e.preventDefault();
				_self.Ants.generate(parseInt(document.querySelector('input').value, 10));
			});

			// event handler event type
			window.addEventListener('devicelight', function(event) {
				_self.Light.handler(event.value);
			});

		},
		Ants: {
			generate: function(length){
				var _self = this,
					t = document.querySelector('#ant'),
					newAnt,
					randomScale,
					randomX,
					randomY,
					randomRotation;

				for(var i=0; i<length; i++) {
					randomScale = Math.floor(Math.random() * 5) / 10 + 0.3;
					randomX = Math.floor(Math.random() * window.innerWidth)
					randomY = Math.floor(Math.random() * window.innerHeight)
					randomRotate = Math.floor(Math.random() * 360);

					newAnt = t.content.querySelector('.ant');

					newAnt.style.top = '10px';
					newAnt.setAttribute('data-scale',randomScale);
					newAnt.style.MozTransform = 'scale('+randomScale+','+randomScale+') rotate('+randomRotate+'deg)';
					newAnt.style.left = randomX + "px";
					newAnt.style.top = randomY + "px";

					document.body.appendChild(t.content.cloneNode(true));
				}
			},
			animate: function(){
				var now = Date.now();
				if((now - 2000) > App.Light.lastTime){
					var ants = document.querySelectorAll('.ant'),
						randomX,
						randomY,
						deltaX,
						deltaY,
						scale,
						ant;

					for(i in ants) {
						ant = ants[i];

						randomX = Math.floor(Math.random() * window.innerWidth);
						randomY = Math.floor(Math.random() * window.innerHeight);

						if(ant.style){
							deltaY = randomY - ant.style.top.replace('px','');
							deltaX = randomX - ant.style.left.replace('px','');
							angleInDegrees = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
							angleInDegrees = angleInDegrees - 180;
							scale = ant.getAttribute('data-scale');
							ant.style.MozTransform = 'scale('+scale+','+scale+') rotate('+angleInDegrees+'deg)';
							ant.style.left = randomX + "px";
							ant.style.top = randomY + "px";
						}
					}
					App.Light.lastTime = now;
				}
				App.Light.id = requestAnimationFrame(App.Ants.animate);
			}
		},
		Light: {
			id: null,
			lastTime: Date.now(),
			handler: function(value){
				if(value < 10) {
					document.querySelector('body').className = 'night';
					App.Light.id = requestAnimationFrame(App.Ants.animate);
				} else {
					document.querySelector('body').className = '';
					cancelAnimationFrame(App.Light.id);
				}
			}
		}
	}

})();

App.setup();