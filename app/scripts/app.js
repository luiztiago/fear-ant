var App = (function () {

	return {
		setup: function(){
			var _self = this;
			document.querySelector('form').addEventListener('submit', function(e){
				e.preventDefault();
				_self.Ants.generate();
			});
			setInterval(_self.Ants.animate, 2000);
		},
		Axis: {
			generate: function(){

			}
		},
		Ants: {
			generate: function(){
				var length = parseInt(document.querySelector('input').value, 10),
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
					newAnt.style.webkitTransform = 'scale('+randomScale+','+randomScale+') rotate('+randomRotate+'deg)';
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
					randomX = Math.floor(Math.random() * 200) - 100;
					randomY = Math.floor(Math.random() * 200) - 100;
					ant = ants[i];
					ant.style.left = ant.offsetLeft + randomX + "px";
					ant.style.top = ant.offsetTop + randomY + "px";
				}
			}
		}
	}

})();

App.setup();