# ReadAloud

ReadAloud is a web application inspired by Audible that allows users to upload books in text format and get them converted into audio files using AI-based text-to-speech (TTS). The app provides an interactive UI similar to Spotify, where users can play, pause, download, and view their converted files in the history section.

## Features

- **Upload Book:** Users can upload text files (e.g., .txt) containing the content of books.
- **Text-to-Speech (TTS) Conversion:** Converts the uploaded text file to an MP3 file using Google's Text-to-Speech (gTTS) API.
- **Audio Playback:** After conversion, users can play, pause, and download the generated audio file.
- **History Section:** Allows users to access previously converted files.

## How it works

1. **Upload a Book:** Users upload a text file containing the book's content.
2. **Text-to-Speech Conversion:** The server processes the uploaded file and converts the text into speech using Google's gTTS API.
3. **Audio Output:** The generated audio file is made available for playback and download.

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express
- **Text-to-Speech API:** gTTS (Google Text-to-Speech)
- **File Upload:** Multer for handling file uploads

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Rahulverma0706/ReadAloud.git
    ```

2. Navigate into the project directory:

    ```bash
    cd ReadAloud
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the backend server:

    ```bash
    npm start
    ```

5. The app will be available at `http://localhost:5000`.

## Deployment

The project is deployed on [Vercel](https://vercel.com) and [Render](https://render.com) for easy access. 

Live demo: [ReadAloud Demo](https://read-aloud-five.vercel.app/)

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is licensed under the MIT License.
