# Backend - WebGIS Application for House Discovery

This folder contains the backend implementation for the WebGIS Application for House Discovery. The backend is responsible for handling server-side logic, managing APIs, and interacting with the database.

## Features

- RESTful APIs for house discovery and geographic data.
- Integration with external services (if applicable).
- Database interaction for storing and querying house data.
- Error handling and logging mechanisms.

## Project Structure

### Key Files and Directories

- `pom.xml`: Maven configuration file for managing dependencies and build settings.
- `src/main/java/com/group23/houses_discovery/`: Contains the main Java source code.
  - `controller/`: Handles incoming API requests.
  - `service/`: Contains business logic for the application.
  - `repository/`: Interfaces for database operations.
  - `model/`: Defines data models and entities.
- `src/main/resources/`: Contains configuration files.
  - `application.properties`: Spring Boot configuration file for database and server settings.
  - `logback.xml`: Configuration for logging.
- `src/test/java/com/group23/houses_discovery/`: Contains unit and integration tests.

## Installation

### Prerequisites

- Java Development Kit (JDK) 11 or higher.
- Maven 3.6 or higher.
- A database (e.g., MySQL, PostgreSQL) configured as per `application.properties`.

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/WebGIS-Application-for-House-Discovery.git
   ```

2. Navigate to the backend folder:

   ```sh
   cd backend
   ```

3. Build the project:

   ```sh
   mvn clean install
   ```

4. Run the application:

   ```sh
   mvn spring-boot:run
   ```

## API Endpoints

Base URL
`http://localhost:8080`

Example Endpoints

- GET /api/houses: Retrieve a list of houses.
- POST /api/houses: Add a new house.
- PUT /api/houses/{id}: Update house details.
- DELETE /api/houses/{id}: Delete a house.

## Configuration

### Database

Update the application.properties file with your database credentials:

```sh
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Logging

Modify `logback.xml` for custom logging configurations.

## Testing

Run unit and integration tests using Maven:

```sh
mvn test
```

## Deployment

### Docker

If Docker is used, include a `Dockerfile` and `docker-compose.yml` for containerized deployment.

Azure Deployment
Follow Azure deployment best practices if deploying to Azure services.

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

### Contact

For inquiries, please contact the project team at `echoybl1123@gmail.com`.
