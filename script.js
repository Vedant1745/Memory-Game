const emojis = ["😂", "😂", "😍", "😍", "💕", "💕", "👍", "👍",
    "😎", "😎", "😭", "😭", "🥳", "🥳", "😵‍💫", "😵‍💫"];

var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    box.onclick = function () {
        this.classList.add('boxOpen');
        setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length) {
                const openedBoxes = document.querySelectorAll('.boxOpen');
                if (openedBoxes[0].innerHTML === openedBoxes[1].innerHTML) {
                    openedBoxes[0].classList.add('boxMatch');
                    openedBoxes[1].classList.add('boxMatch');

                    openedBoxes[0].classList.remove('boxOpen');
                    openedBoxes[1].classList.remove('boxOpen');

                    // Correct win condition check
                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        alert('You won!');
                    }
                } else {
                    // Remove boxOpen class if not a match
                    openedBoxes[0].classList.remove('boxOpen');
                    openedBoxes[1].classList.remove('boxOpen');
                }
            }
        }, 500);
    }

    document.querySelector('.game').appendChild(box);
}
