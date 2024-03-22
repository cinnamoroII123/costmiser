// ==UserScript==
// @name         ChristWare
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ChristWare For TTRS
// @match        https://play.ttrockstars.com/*
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';

    // Replace the values below with your desired image link and new title
    var faviconUrl = "https://imgs.search.brave.com/cSgkWfd2FfGnEW6C0ND_LrXqcnucEG4V1cYTK6LEVXk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzE3L0No/cmlzdF9pbl90aGVf/V2lsZGVybmVzc18t/X0l2YW5fS3JhbXNr/b3lfLV9Hb29nbGVf/Q3VsdHVyYWxfSW5z/dGl0dXRlLmpwZy81/MTJweC1DaHJpc3Rf/aW5fdGhlX1dpbGRl/cm5lc3NfLV9JdmFu/X0tyYW1za295Xy1f/R29vZ2xlX0N1bHR1/cmFsX0luc3RpdHV0/ZS5qcGc";
    var newTitle = "ChristWare | .gg/rexy";

    // Change favicon
    var favicon = document.querySelector("link[rel*='icon']");
    if (favicon) {
        favicon.href = faviconUrl;
    }

    // Function to handle Tab key press event
    function handleTabKeyPress(event) {
        if (event.keyCode === 9) { // Tab key
            // Prompt for new name
            var newName = prompt("Enter the new name:");

            // Replace the name in the code snippet
            var codeSnippet = document.querySelector('h1.name');
            codeSnippet.textContent = newName;

            // Broadcast the new name to other users
            var nameChangeEvent = new CustomEvent('nameChange', { detail: newName });
            document.dispatchEvent(nameChangeEvent);
        }
    }

    // Add event listener to detect Tab key press
    document.addEventListener('keydown', handleTabKeyPress);

    // Function to handle 1 key press event
    function handleOneKeyPress(event) {
        if (event.keyCode === 17) { // Ctrl key
            var selectedOption = prompt("Enter the desired replacement for 'Rock Hero':");

            if (selectedOption) {
                // Replace the status in the code snippet
                var codeSnippet = document.querySelector('h2.rockstatus');
                codeSnippet.textContent = selectedOption;
            }
        }
    }

    // Add event listener to detect 1 key press
    document.addEventListener('keydown', handleOneKeyPress);

    // Function to handle name change event from other users
    function handleNameChange(event) {
        var newName = event.detail;
        var codeSnippet = document.querySelector('h1.name');
        codeSnippet.textContent = newName;
    }

    // Add event listener to detect name change event
    document.addEventListener('nameChange', handleNameChange);
})();
