document.addEventListener("DOMContentLoaded", function() {
    let uploadForm = document.getElementById("uploadForm");
    let textInput = document.getElementById("textInput");
    let imageInput = document.getElementById("imageInput");
    let savedTextElement = document.getElementById("savedText");
    let uploadedImage = document.getElementById("uploadedImage");

    if (uploadForm && textInput && imageInput && savedTextElement && uploadedImage) {
        uploadForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Get text input
            let text = textInput.value;
            localStorage.setItem("savedText", text);
            savedTextElement.innerText = "Saved Text: " + text;

            // Get image input
            let imageFile = imageInput.files[0];
            if (imageFile) {
                let reader = new FileReader();
                reader.onload = function(e) {
                    uploadedImage.src = e.target.result;
                    uploadedImage.style.display = "block";
                };
                reader.readAsDataURL(imageFile);
            }
        });

        // Load saved text on page load
        let savedText = localStorage.getItem("savedText");
        if (savedText) {
            savedTextElement.innerText = "Saved Text: " + savedText;
        }
    }
});
