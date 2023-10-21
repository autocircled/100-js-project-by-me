const keys = document.querySelectorAll(".key");
const note = document.querySelector(".key-pressed");
let prevNote = "";
let prevNoteCount = 0;

window.addEventListener("keydown", playNote);
window.addEventListener("keyup", removeTransition);
function playNote(e) {
	const audio = document.querySelector(`audio[data-key="${e?.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e?.keyCode}"]`);

	if (!key) return;

	prevNoteCount++;

	// Check if the note is too long, if so, decrease the font size
	if (prevNoteCount > 10) {
		note.classList.remove("medium");
		note.classList.add("long");
	} else if (prevNoteCount > 5) {
		note.classList.add("medium");
	}

	if (prevNote && prevNote === e.key.toUpperCase()) {
		// Check if the note is too long, if so, cut the note
		if (note.textContent.length <= 30) {
			note.textContent = note.textContent + " " + prevNote;
		} else {
			note.textContent = prevNote;
		}

	} else {

		// Reset the note count, remove classes
		prevNote = e.key.toUpperCase();
		note.textContent = prevNote;
		prevNoteCount = 1;
		note.classList.remove("medium");
		note.classList.remove("long");
	}

	key.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
}


function removeTransition(e) {
	const key = document.querySelector(`.key[data-key="${e?.keyCode}"]`);
	if (!key) return;
	key.classList.remove("playing");
}