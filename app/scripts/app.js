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
					deltaX,
					deltaY,
					ants = document.querySelectorAll('.ant'),
					ant;

				for(i in ants) {
					ant = ants[i];

					randomX = Math.floor(Math.random() * window.innerWidth);
					randomY = Math.floor(Math.random() * window.innerHeight);

					deltaY = randomY - ant.style.top.replace('px','');
					deltaX = randomX - ant.style.left.replace('px','');
					angleInDegrees = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
					angleInDegrees = angleInDegrees - 180;
					ant.style.webkitTransform = 'rotate('+angleInDegrees+'deg)';

					ant.style.left = randomX + "px";
					ant.style.top = randomY + "px";
				}
			}
		}
	}

})();

App.setup();