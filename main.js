
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const container = document.getElementById('container');
    const inp1 = document.getElementById('inp1');
    container.innerHTML = "";
    const score = parseInt(inp1.value);

    if (score < 0 || score > 10) {
        container.innerHTML = `You can't have a score greater than 10 or less than 0.`
        inp1.value = "";
    }
    
    else {
        container.innerHTML = `<div id='progress'>${score}</div>`;
        inp1.value = "";
        let bar = {};
        const progressProps = {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#eee',
            trailWidth: 6,
            svgStyle: null
        }

        if (score / 10 > 0.7 && score / 10 < 11) {
            progressProps.color = '#2ECC71';
            bar = new ProgressBar.Circle(container, progressProps);

        } else if (score / 10 > 0.3 && score / 10 < 0.8) {
            progressProps.color = '#FCC061';
            bar = new ProgressBar.Circle(container, progressProps);

        } else if (score / 10 > -1 && score / 10 < 4) {
            progressProps.color = 'red';
            bar = new ProgressBar.Circle(container, progressProps);
        }


        bar.animate(score / 10);
    }
});






