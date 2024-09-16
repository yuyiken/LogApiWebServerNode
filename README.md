# LogApiWebServerNode

This is a small Node.js application that serves as a web server to handle events from a Counter-Strike 1.6 server using the LogAPI. The application verifies API requests using a token and dynamically calls methods based on the received event type. The results are returned as JSON responses.

## Features

- Handles various server and client events from a CS 1.6 server.
- Validates requests using an API token.
- Dynamically calls event methods and returns the results as JSON.

<details>
  <summary>Example Result</summary>

  ![Example Result](https://raw.githubusercontent.com/yuyiken/LogApiWebServerNode/main/Example%20result.png)

</details>

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yuyiken/LogApiWebServerNode.git
    ```
2. Navigate to the project directory:
    ```bash
    cd LogApiWebServerNode
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Update the `API_TOKEN` in `index.js` with your actual token.
2. Start the server:
    ```bash
    node index.js
    ```
3. The server will run on port `4000` by default. You can send POST requests to `/api` with the appropriate event data.

## Credits

Special thanks to [@SmileYzn](https://github.com/SmileYzn) for creating the original [LogAPI](https://github.com/SmileYzn/LogApi) for Counter-Strike 1.6.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
