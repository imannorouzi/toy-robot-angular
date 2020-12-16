# [Demo](https://imannorouzi.github.io/toy-robot-angular-built/)

# Toy Robot Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25 by **Iman Norouzi** in order to accomplish a code challenge for **IRESS company**.
You can find the description and requirements of this simulation at the end of this page.

The software comes with a UI in which you can see the robot on a chess like board and move it around using buttons. Also, a history of executed commands is available on left side hand section, and you can repeat a command by clicking it.

## How to run

You can access [My Toy Robot Angular Github Page](https://imannorouzi.github.io/toy-robot-angular-built/) to access a built and ready version. Otherwise, run `ng serve` for a dev server and navigate to `http://localhost:4200/`.

## How to use

Click the board or use PLACE command to put the robot on the board and use arrow keys, buttons or input box to move the robot around. You can find the explanation for each command at the [end](#description-and-requirements) of this README file.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

The output should be something like this:

```
workspace-project App
    ✓ should display welcome message
    ✓ should create an instance or Robot
    ✓ should place a robot on the board
    ✓ should turn a robot left
    ✓ should turn a robot right
    ✓ should move the robot forward
    ✓ should report the robot position
    ✓ should move the robot as expected 1
    ✓ should move the robot as expected 2
```


## Description and requirements:
The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no
other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented
from falling to destruction. Any movement that would result in the robot falling from the table must be prevented,
however further valid movement commands must still be allowed.
Create a console application that can read in commands of the following form
 
* PLACE X,Y,F
* MOVE
* LEFT
* RIGHT
* REPORT

`PLACE` will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0)
can be considered to be the SOUTH WEST most corner. It is required that the first command to the robot is a `PLACE`
command, after that, any sequence of commands may be issued, in any order, including another `PLACE` command. The
application should discard all commands in the sequence until a valid `PLACE` command has been executed.

`MOVE` will move the toy robot one unit forward in the direction it is currently facing.

`LEFT` and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.

`REPORT` will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.

A robot that is not on the table can choose to ignore the `MOVE`, `LEFT`, `RIGHT` and `REPORT` commands.
Input can be from a file, or from standard input, as the developer chooses.
Provide test data to exercise the application.

It is not required to provide any graphical output showing the movement of the toy robot.
The application should handle error states appropriately and be robust to user input.

### Constraints
The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any
move that would cause the robot to fall must be ignored.
