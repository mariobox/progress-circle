# progress-circle
Creates a progress bar around a circle with the progress number in the center.

I started with [progressbar.js](https://kimmobrunfeldt.github.io/progressbar.js/) by Kimmo Brunfeldt.  Progressbar lets you create animated and stylish progress bars around geometrical shapes.

I used Progressbar's circle as the base for my project, which is intended to create an animated score dashboard to display at the end of a quiz. I then customized the shape with the following options:

1. I inserted the actual score in number format, centered in the middle of the circle. For this, I had to play with some HTML id's and classes, and CSS absolute and relative positioning. Since the score is passed to a variable, I passed the score to the "animate" function too. For example, if the score is 8, the progress bar will only display around 80% of the circle.

2. I Gave the progress bar different colors, depending on the score. If the score is between 0 and 3, the progress bar is red. Between 4 and 7 it is yellow, and between 8 and 10 it is green.

The [live demo](https://mariobox.github.io/progress-circle) has the user type a score of between 0 and 10 manually in an input field, but if you're using this in a quiz application you can obviously pass along the score to a variable with a few tweaks to the JS, and get the progress circle to display without further user interaction.
