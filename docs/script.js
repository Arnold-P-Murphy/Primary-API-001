document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get text input
    let text = document.getElementById("textInput").value;
    localStorage.setItem("savedText", text);
    document.getElementById("savedText").innerText = "Saved Text: " + text;

    // Get image input
    let imageInput = document.getElementById("imageInput").files[0];
    if (imageInput) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imgElement = document.getElementById("uploadedImage");
            imgElement.src = e.target.result;
            imgElement.style.display = "block";
        };
        reader.readAsDataURL(imageInput);
    }
});

// Load saved text on page load
document.addEventListener("DOMContentLoaded", function() {
    let savedText = localStorage.getItem("savedText");
    if (savedText) {
        document.getElementById("savedText").innerText = "Saved Text: " + savedText;
    }
});
