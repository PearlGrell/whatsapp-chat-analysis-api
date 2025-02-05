
# Whatsapp Chat Analysis API

This project provides an API for analyzing chat messages using Google's Generative AI. The API receives messages, processes them, and generates an analysis based on the content of the messages.

## Features

- Analyze chat messages by extracting text data from a list of message objects.
- Use Google's Generative AI (Gemini-2.0 Flash Exp model) for content analysis.
- System instructions are dynamically loaded from a text file for flexibility.
- Error handling middleware to capture issues throughout the API.

## Installation

### Prerequisites

- Node.js (v14+)
- npm or yarn
- A Google API key for accessing the Generative AI service

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-analysis-api.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file:
   Create a `.env` file in the root of the project and add the following variables:
   ```env
   API_KEY=your_google_api_key
   ```

4. Create the `public/system_instructions.txt` file with any necessary system instructions for the AI model.

## API Endpoints

### 1. `POST /api/analyse`
This endpoint analyzes a set of chat messages.

#### Request Body
The request body should contain a JSON object with the `messages` array, which consists of message objects. Each message should have:
- `timestamp`: A string indicating when the message was sent.
- `sender`: A string indicating who sent the message.
- `text`: A string containing the message text.

Example:
```json
{
  "messages": [
    {
      "timestamp": "2025-02-05T10:00:00Z",
      "sender": "John",
      "text": "Hello, how are you?"
    },
    {
      "timestamp": "2025-02-05T10:01:00Z",
      "sender": "Alice",
      "text": "I'm good, thanks!"
    }
  ]
}
```

#### Response
The API will respond with a JSON object containing the analysis of the chat messages.

Example response:
```json
{
  "analysis": {
    "overallSentiment": "positive",
    "topics": ["greetings", "well-being"],
    ...
  }
}
```

### 2. `GET /`
This endpoint is the default route that sends a welcome message.

#### Response:
```json
{
  "message": "Welcome to Chat Analysis API"
}
```

## Middleware

- **Error Handling**: A custom error middleware captures errors and sends appropriate responses with a status code of 500 and an error message.

## Running the Server

To start the server, run:

```bash
npm start
```

The server will be running on `http://localhost:3001`.
