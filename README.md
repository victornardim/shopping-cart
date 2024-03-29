# Shopping cart
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()

This project was developed to study javascript code archtecture.

The archtecture consists in four layers:

## View

This layer is responsible for data display, styling and any other feature that envolves manipulate data for exhibition.

## Controller

This layer is responsible for acting like an adapter through the view and the facade layers. Only this layer can manipulate DOM elements for data rendering.

## Facade

This layer works like an adapter through the controller and the core layer (if has one).

It is responsible for the business logic and data management, so if there is some modification in the data, it will be necessary to get it from here. Data change in other layers is forbidden, because it hurt the consistency of the application. Modifying data in a specific layer helps in the maintenance, by quickly find the place of some inconsistence.

## Model

This layer as the name says, acts like a model to the data, saying how it must be.

It is responsible for basic data validation like requirement, range and basic rules.

Helper methods like normalization/parsing of a property need to be in here too.

## Tests

The tests are allocated in the 'test' folder, and they use de QUnit framework.

They aren't integration tests, because they just test the objects, not the UI, so they're unit tests.

The only layers that was tested was model and facade, because they're the only layers that hold business logic.
