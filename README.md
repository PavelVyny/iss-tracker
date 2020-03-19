This project was bootstrapped with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`
(Install node_modules first)

### ISS tracker
- The application monitors the movement of the ISS, displays its coordinates on Google map, shows the date and time (in the UTC format), as well as the ISS crew. All data is updated every 5 seconds.

- In case of errors when loading data (coordinates, squad members), the application displays errors.

- The application is correctly displayed on screens of any size. For styling was used SCSS pre processor and BEM metodology.

- The application page on the Github Pages (https://pavelvyny.github.io/iss-tracker/) does not display the crew of the ISS due to mixed content (http / https), it was not possible to find json with astronauts with the https protocol.



