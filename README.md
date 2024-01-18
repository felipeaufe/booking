# Booking

Booking is a project developed as a React practice and challenge.

It uses React version 18 and contains a complete configuration for a single-page application (SPA). This includes dynamic routes, full pages, state management, and communication with an external API. It also uses the Event Bus concept to handle events.

The project tries to represent a simple travel reservation system. Users can choose from available options and make a reservation. The reservation will simulate a request to an API, but the data is only persisted in memory and localStorage.

## Technology

Technologies used in the project

- React 18;
- ViteJS;
- TypeScript ES2020;
- React Modal;
- React Toastify;
- Swiper;
- Jest;
- Redux Saga;
- Axios.

## Starting project

1. Install package dependencies with `yarn install` or `npm install` (Node v18.19.0);
2. Execute the project with `yarn start` or `yarn dev`;
3. Have fun.

## Project Structure

This project uses the Atomic Design methodology to structure its components. Atomic Design is a methodology that breaks down a design system into five levels of abstraction: atoms, molecules, organisms, templates, and pages.

For this project, we used the following nomenclature for each level of abstraction:

- Elements (Atoms): The smallest, most basic components of a design system. They are typically single HTML elements or CSS classes.
- Components (Molecules): Groups of atoms that combine to form more complex components.
- Compositions (Organisms): Groups of molecules that combine to form even more complex components.
- Pages: The highest level of abstraction in Atomic Design. They are the complete user interfaces that users interact with.

Other on-demand folders were also used:

- Utils: This folder contains utility functions and components that are used throughout the project.
- Services: This folder contains services that interact with external APIs.
- State: This folder contains state management logic for the application.
- Hooks: This folder contains custom hooks that encapsulate reusable React logic.
- Assets: This folder contains static assets such as Styled Components and stylesheets.
- Config: This folder contains configuration files for the project.

## Design

To build this project, we first conducted a study of the pages and flows that we wanted to create. We used Figma to create wireframes and prototypes of the pages. This helped us to visualize the project and to identify any potential problems.

![MIT License](/documentation/images/home.png)

[Click here to access the complete material!](https://www.figma.com/file/Z0KPdhfLoRImLlFvZLnE5q/Booking?type=design&node-id=884%3A1330&mode=design&t=wHmbz070XIGF3zUE-1)

## Contributors

**@author:** 'Felipe Augusto _< [https://www.linkedin.com/in/felipe-augusto-feitosa/](https://www.linkedin.com/in/felipe-augusto-feitosa/) >_'
