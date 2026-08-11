// Game Script Array
        const storyScript = [
            { name: "Kokichi Ouma", text: "Oh." },
            { name: "Kokichi Ouma", text: "It's you." },
            { name: "Kokichi Ouma", text: "You shouldn't be here." },
            { name: "Kokichi Ouma", text: "You are FAR to curious for your own good." },
            { name: "Kokichi Ouma", text: "..." },
            { name: "Kokichi Ouma", text: "LEAVE." },
        ];

        let currentIndex = 0;
        let textIndex = 0;
        let isTyping = false;
        let typingTimer;
        const typingSpeed = 30; // Milliseconds per character

        const nameEl = document.getElementById("characterName");
        const textEl = document.getElementById("dialogueBox");
        const arrowEl = document.getElementById("nextArrow");

        // Load the current dialogue line
        function showDialogue() {
            clearInterval(typingTimer);
            arrowEl.style.display = "none";
            isTyping = true;
            
            const currentLine = storyScript[currentIndex];
            nameEl.textContent = currentLine.name; // Fixed to textContent
            
            // Format Kokichi name tag appearance
            if (currentLine.name === "Kokichi Ouma") {
                nameEl.style.background = "#4a2e80"; // Kokichi theme purple
                nameEl.style.color = "#fff";
            } else {
                nameEl.style.background = "#e0b034";
                nameEl.style.color = "#14141e";
            }

            // RESTORED THIS CRITICAL LINE SO IT DOES NOT CRASH:
            let fullText = currentLine.text; 
            textEl.textContent = ""; 
            textIndex = 0;

            typingTimer = setInterval(() => {
                if (textIndex < fullText.length) {
                    textEl.textContent += fullText.charAt(textIndex); // Fixed to textContent
                    textIndex++;
                } else {
                    completeLine();
                }
            }, typingSpeed);
        }

        // Finish typing immediately
        function finishLineEarly() {
            clearInterval(typingTimer);
            textEl.textContent = storyScript[currentIndex].text; // Fixed to textContent
            completeLine();
        }

        // Clean up states when line text finishes printing
        function completeLine() {
            isTyping = false;
            arrowEl.style.display = "block"; // Show flashing next arrow
        }

        // Handle clicking or clicking inside the textbox
        function handleAdvance() {
            if (isTyping) {
                // If text is still printing, finish rendering it immediately
                finishLineEarly();
            } else {
                // Advance to the next line in script array
                currentIndex++;
                if (currentIndex < storyScript.length) {
                    showDialogue();
                } else {
                    // Loop back to beginning for display demonstration purposes
                    currentIndex = 0;
                    showDialogue();
                }
            }
        }

        // Initialize game screen on load
        showDialogue();