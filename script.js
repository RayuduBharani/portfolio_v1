const textContainer = document.getElementById('text-container');
        const textToType = "Rayudu Bharani Satya Siva DurgaPrasad . . . ";
        let index = 0;

        function typeText() {
            if (index < textToType.length) {
                textContainer.textContent += textToType[index];
                index++;
                setTimeout(typeText, 110);
            } else {
                setTimeout(resetAnimation, 1000);
            }
        }

        function resetAnimation() {
            textContainer.textContent = '';
            index = 0;
            typeText();
        }

        typeText();