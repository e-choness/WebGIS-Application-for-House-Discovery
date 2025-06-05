# Frontend - WebGIS Application for House Discovery

This folder contains the frontend implementation for the WebGIS Application for House Discovery. The frontend provides an interactive user interface for discovering houses using geographic information system (GIS) features.

---

## Features

- Interactive map-based interface for house discovery.
- Integration with ArcGIS JavaScript API for GIS functionalities.
- Responsive design for various screen sizes.
- Dynamic data visualization and filtering.

---

## Project Structure

### Key Files and Directories

- `index.html`: The main HTML file for the application.
- `gulpfile.js`: Configuration for Gulp tasks (e.g., building, minifying).
- `package.json`: Contains dependencies and scripts for the frontend.
- `src/`: Contains JavaScript files, controllers, configurations, and styles.
  - `config.js`: Configuration settings for the frontend.
  - `index.js`: Entry point for the frontend application.
  - `controller/`: Contains controllers for managing application logic.
  - `lib/`: Includes external libraries such as ArcGIS.
  - `style/`: Contains CSS files for styling the application.
- `json/`: Contains JSON files for logout, menu, and profile data.
- `layui/`: Includes LayUI framework files (JavaScript, CSS, fonts, and images).

---

## Installation

### Prerequisites

- Node.js and npm installed on your system.

### Steps

1. Navigate to the frontend folder

   ```sh
    cd frontend
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm start
   ```

## Usage

1. Open the application in your browser

   ```sh
   http://localhost:3000
   ```

2. Use the interactive map to discover houses and filter data.

## Build

To build the project for production

```sh
 npm run build
```

The production-ready files will be available in the `dist/` directory.

## Configuration

ArcGIS Integration
Ensure the ArcGIS JavaScript API is properly configured in the `src/lib/extend/arcgis_js_v418` directory.

Environment Variables
If applicable, configure environment variables in a `.env` file.

## Testing

Run tests using the following command:

```sh
npm run test
```

## Deployment

Azure Static Web Apps
If deploying to Azure Static Web Apps, follow Azure deployment best practices.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For inquiries, please contact the project team at `echoybl1123@gmail.com`.
