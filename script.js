        // Countdown Timer
        function startCountdown(duration) {
            let countdownTime = duration;
            const countdownElement = document.getElementById("countdown");

            const countdownInterval = setInterval(function() {
                const hours = Math.floor((countdownTime % (60 * 60 * 48)) / (60 * 60));
                const minutes = Math.floor((countdownTime % (60 * 60)) / 60);
                const seconds = Math.floor(countdownTime % 60);

                document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
                document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
                document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

                countdownTime--;

                if (countdownTime < 0) {
                    clearInterval(countdownInterval);
                    startCountdown(duration); // Restart the countdown
                }
            }, 1000);
        }

        startCountdown(48 * 60 * 60);

        document.addEventListener('DOMContentLoaded', function () {
            const textElement = document.getElementById('animated-text');
            const fullText = "What does HydroTech do?"; // Text to animate
            let index = 0; // Start at 0 for animation
            let decreasing = false; // Control whether we are increasing or decreasing text
        
            function animateText() {
                if (decreasing) {
                    // Decrease the text
                    textElement.textContent = fullText.slice(0, index);
                    index--;
                    if (index < 0) {
                        decreasing = false;
                        index = 1; // Reset to 1 after reaching the beginning
                    }
                } else {
                    // Increase the text
                    textElement.textContent = fullText.slice(0, index);
                    index++;
                    if (index > fullText.length) {
                        decreasing = true; // Once the full text is shown, start decreasing
                        index = fullText.length - 1; // Ensure it stops at the last character
                    }
                }
                setTimeout(animateText, 200); // Speed of animation
            }
        
            animateText(); // Start the animation
        });
        