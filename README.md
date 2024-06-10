# Weather Web Application using the Open Weather API

### View Demo:[click here](https://6666b403b7dd97889316fd75--starlit-elf-f72a1a.netlify.app/).

## Overview

The Weather Web Application is a React.js application designed to provide users with up-to-date weather information form different cities. This app incorporates CSS for styling, Axios for making HTTP requests, and React Query for efficient data fetching. Stay informed about the weather conditions with this user-friendly and visually appealing application.

## Approach

- **User Input:** Users can enter the name of a city.

- **API Request:** The application sends a request to the Open Weather API using the provided city name.

- **Data Processing:** The response from the API is processed to extract relevant weather information.

- **Display:** The weather information is displayed to the user in a clean and user-friendly interface.

## Features

- **City-Based Forecast:** Fetches and displays weather forecasts for different Cities.

- **Real-Time Updates:** Utilizes React Query for efficient and automatic data fetching, ensuring real-time weather updates.

- **Responsive Design:** Incorporates CSS for a responsive and visually appealing user interface across various devices.

- **Detailed Weather Information:** Provides comprehensive weather details including country code, date, time, temperature, humidity and wind speed with direction.

## Technologies

- **ReactJS:** A JavaScript library for building user interfaces.

- **Open Weather API:** A third-party API providing weather data.

- **Axios:** A promise-based HTTP client for making API requests.

- **CSS Modules:** For styling components locally and modularly.

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.

- [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js.

## Limitations

- **Error Handling:** Error handling is basic. More comprehensive error handling could be added.

- **Geolocation:** The application does not currently support geolocation to automatically detect the user's location.

- **API Rate Limiting:**The Open Weather API has rate limits on the number of requests.
