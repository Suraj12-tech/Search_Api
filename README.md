# Search API

A simple Search API project with a web-based UI to create, view, and fetch individual records by ID. The repository contains both frontend (JavaScript/CSS/HTML) and backend (Java) code.

## Screenshot

![Search API UI](assets/screenshot.png)

> Place the provided screenshot image at `assets/screenshot.png` so it appears here in the README. The screenshot included in the issue is named Image 1.

## Features

- Create new records (POST)
- List all records (GET)
- Fetch a single record by ID (GET)
- Minimal, responsive UI for interacting with the API

## Technologies

- Frontend: JavaScript, HTML, CSS
- Backend: Java (recommended: Spring Boot)
- Database: (optional) H2 / any JDBC-compatible database

## Project structure

This section describes a suggested directory layout for the frontend and backend code found in this repository.

Frontend (client) structure

- frontend/
  - package.json                 # npm project descriptor
  - public/
    - index.html                 # static HTML shell
    - favicon.ico
  - src/
    - index.js / main.js         # app entry
    - App.js                     # main React/Vue/Vanilla app file
    - styles.css                 # global styles
    - components/
      - CreateRecord.js          # component to create/save records
      - FetchRecord.js           # component to fetch a record by ID
      - RecordsList.js           # component to list all records
    - services/
      - api.js                   # wrapper for fetch/axios requests to backend

Typical frontend commands

- Install dependencies: `npm install` or `yarn`
- Run in development: `npm start` (or `yarn start`)
- Build for production: `npm run build`

Environment

- REACT_APP_API_URL or VITE_API_URL (set to backend base URL, e.g. `http://localhost:8080/api`)

Backend (server) structure

- backend/
  - pom.xml or build.gradle      # Maven/Gradle build file
  - src/
    - main/
      - java/
        - com.example.searchapi/
          - SearchApiApplication.java   # Spring Boot main class (if using Spring)
          - controller/
            - RecordController.java    # REST controllers (GET, POST endpoints)
          - model/
            - Record.java              # entity/DTO for records
          - repository/
            - RecordRepository.java    # data access (JPA repository or DAO)
          - service/
            - RecordService.java       # business logic layer
      - resources/
        - application.properties      # config (server port, datasource, CORS)

Sample backend endpoints

- GET /api/records            - list all records
- GET /api/records/{id}       - get a record by id
- POST /api/records           - create a new record

Run backend (example using Maven + Spring Boot)

- Build: `mvn clean package`
- Run: `mvn spring-boot:run` or `java -jar target/search-api.jar`

CORS

If the frontend runs on a different port (e.g., 5173) enable CORS on the backend or set up a simple proxy in the frontend dev server.

## Example curl

Create a record:

```
curl -X POST http://localhost:8080/api/records \
  -H "Content-Type: application/json" \
  -d '{"data":"Hello world"}'
```

List records:

```
curl http://localhost:8080/api/records
```

Get single record by id:

```
curl http://localhost:8080/api/records/1
```

## Where to put the screenshot

Save the screenshot (Image 1 from the conversation) to `assets/screenshot.png` at the repository root. The README references that path so the picture appears inline on GitHub.

## Contributing

Contributions are welcome — please open an issue or submit a PR with a clear description of the change.

## License

Specify a license for the project (e.g., MIT). If you want, I can add a LICENSE file as well.
