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
			})

			_self.Ants.generate(1);
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
					randomX = Math.floor(Math.random() * 90);
					randomY = Math.floor(Math.random() * 90);
					randomRotate = Math.floor(Math.random() * 360);

					newAnt = t.content.querySelector('.ant');

					newAnt.style.top = '10px';
					newAnt.style.MozTransform = 'scale('+randomScale+','+randomScale+') rotate('+randomRotate+'deg)';
					newAnt.style.left = randomX + "%";
					newAnt.style.top = randomY + "%";

					document.body.appendChild(t.content.cloneNode(true));
				}
			},
			animate: function(){
				var randomX,
					randomY,
					ants = document.querySelectorAll('.ant'),
					ant;

				for(i in ants) {
					randomX = Math.floor(Math.random() * window.innerWidth);
					randomY = Math.floor(Math.random() * window.innerHeight);
					ant = ants[i];
					ant.style.left = randomX + "px";
					ant.style.top = randomY + "px";
				}
			}
		},
		Light: {
			handler: function(value){
				if(value < 10) {
					document.querySelector('body').className = 'night';
					App.Ants.animate();
					App.interval = setInterval(App.Ants.animate, 2000);
				}else{
					document.querySelector('body').className = '';
					clearInterval(App.interval);
				}
			}
		}
	}

})();

App.setup();