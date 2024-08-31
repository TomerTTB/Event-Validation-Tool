# Event Validation Tool - README

## Overview

**EventComparisonTool** is a web application designed to compare events between a predefined list and those retrieved from MixPanel. The tool helps ensure that the events match, flagging discrepancies for review. The application provides detailed feedback based on the comparison, displaying results in a user-friendly table with color-coded rows for quick analysis.

### Key Features:
- **Comparison of Events:** The tool compares predefined events with those retrieved from MixPanel and categorizes them into Pass, Pass with Count > 1, Fail, and Extra.
- **User Interface:** The comparison results are displayed in a table, with color-coded rows indicating the status of each event.
- **Mock Server Integration:** The application can simulate server responses using a MockServer running on Postman.
- **Response Visualization:** After the comparison, the user can click a button to view the original mock server response in a new tab.

## Application Structure

### Front-End Server (live-server)
- The front-end of the application is served using `live-server`, a simple development server that provides live reloading capabilities.
- The HTML, CSS, and JavaScript files are hosted here to manage the user interface and handle interactions with the backend.

### Back-End Server (Node.js with Express)
- The backend is built with Node.js and Express, serving as the API layer that processes event comparisons and manages communication with the MongoDB database.
- This server handles incoming requests, processes them, and returns the appropriate JSON responses to the client.

### MongoDB (Running on Docker)
- MongoDB is used as the database for storing and retrieving event data.
- The database runs on a Docker container, ensuring easy setup and management.
- The application uses the MongoDB Node.js driver to interact with the database.

### MockServer (Running on Postman)
- The application integrates with a MockServer running on Postman to simulate server responses.
- This allows the application to test event comparisons without needing a live backend.

## Installation and Setup

### Prerequisites
- **Node.js** (v14.x or higher)
- **Docker** (for MongoDB)
- **Postman** (for MockServer)

### Dependencies
The following dependencies are required for the application:

```json
{
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.19.2",
    "mongodb": "^6.8.0",
    "node-fetch": "^2.7.0"
  }
}
```

### Steps to Install

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/EventComparisonTool.git
   cd EventComparisonTool
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run MongoDB on Docker:**
   ```bash
   docker run --name mongodb -d -p 27017:27017 mongo:latest
   ```

4. **Start the Back-End Server:**
   ```bash
   node server
   ```

5. **Run the Front-End Server:**
   ```bash
   live-server.js
   ```

### Using the Application

1. **Input Session ID and Select Flow:**
   - Enter a Session ID and select the desired flow from the dropdown menu.

2. **Get Events:**
   - Click the "Get Events" button to fetch events from MixPanel and compare them against the predefined list.

3. **View Results:**
   - The results are displayed in a table with color-coded rows:
     - **Green:** Pass
     - **Yellow:** Pass with Warning
     - **Red:** Fail
     - **Purple:** Extra

4. **View Mock Server Response:**
   - After the comparison, a new button appears allowing you to open the original mock server response in a new tab.

### Adding Predefined Lists to MongoDB

The predefined lists of events should be added to MongoDB in a specific format to ensure they are recognized and used correctly by the application.

#### Format for Entering New Predefined Lists:

Each predefined list is stored as a document in the MongoDB collection. The format should look like this:

```json
{
  "flowName": "Happy Flow",  // Name of the flow
  "events": [
    "event1",
    "event2",
    "event3",
    // Add more events here
  ]
}
```

## Summary

The **EventComparisonTool** is a comprehensive solution for comparing event data, providing clear feedback through a visual interface. By integrating with MongoDB, Docker, and a MockServer, the application is both flexible and robust, making it an essential tool for validating event tracking in any project. The application also allows for easy customization and expansion by adding new predefined lists of events into MongoDB.
