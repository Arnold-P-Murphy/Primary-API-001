from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

# Folder for storing images and data
UPLOAD_FOLDER = 'images'
DATA_FOLDER = 'data'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the folders exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(DATA_FOLDER, exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return redirect(request.url)
    
    file = request.files['file']
    text_input = request.form['text_input']

    # Save the uploaded file
    if file:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

    # Store the text input in a file
    with open(os.path.join(DATA_FOLDER, 'input_data.txt'), 'a') as f:
        f.write(f"{text_input}\n")

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
