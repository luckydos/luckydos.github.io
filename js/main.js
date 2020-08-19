Array.from(document.getElementsByClassName('btnA')).forEach(function(target) {
	target.addEventListener('click', function() {
		console.log(target.getAttribute('value') === 'move To webExample');
		if(target.getAttribute('value') === 'move To webExample') {
			location.href='https://luckydos.github.io/webExample';
		} else if(target.getAttribute('value') === 'move To Root') {
			location.href='https://luckydos.github.io';
		} else if(target.getAttribute('value') === 'move To dreamCoding') {
			location.href='https://luckydos.github.io/dreamCoding';
		}
	});
});