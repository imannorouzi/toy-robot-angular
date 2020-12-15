# Toy Robot Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25 by **Iman Norouzi** in order to accomplish a code challenge for **IRESS company**.
You can find the description and requirements of this simulation at the end of this page.

The software comes with a UI in which you can see the robot on a chess like board and move it around using buttons. Also, a history of executed commands is available on left side hand section, and you can repeat a command by clicking it.

## How to run

You can access [My Toy Robot Angular Github Page](https://imannorouzi.github.io/toy-robot-angular/index.html) to access a built and ready version. Otherwise, run `ng serve` for a dev server and navigate to `http://localhost:4200/`.

## How to use

The application is only accepting commands in below format. It doesn't like extra spaces at the start or end of commands and parameters.

* PLACE X,Y,FACE
* MOVE
* LEFT
* RIGHT
* REPORT
 
 You can find the explanation for each command at the [end](#description-and-requirements) of this README file.

It is possible to send commands to the Robot using three different methods.

1. Single Input - `app.js` has a listener set on the input field using `keyUp` function. It monitors each input character and sends the typed in value to Robot once `Enter` key is pressed. 
1. Textarea Input - It is possible to enter multiple commands in the textarea and send them to Robot by clicking on `Execute` button. This action is handled in `readTextArea` in `app.js`.
1. Text File Input - By choosing a txt file which contains the list of commands, `readInputFile` function would read the content of selected file and send it to simulated robot.

## Robot Object


`Robot` class is declared in `Robot.js` file and has below attributes and methods:
* x: number (0..4) - the column that Robot is located in
* y: number (0..4) - the row that Robot is located in
* f: number (0..4) - the direction that Robot is facing, 0: North, 1: EAST, 2: SOUTH, 3: WEST
* constructor( boardColumnCount: number, boardRowCount: number) 
* left(): boolean - turns the Robot to the left and returns true if successful
* right(): boolean - turns the Robot to the right and returns true if successful
* move(): boolean - moves the Robot one step forward and returns true if successful
* place(x: number, y: number, f: string): boolean - places the Robot on the board based on input parameters if they are valid and returns true if successful
* report(): string - returns current state of the Robot (x, y, face)
* isRobotPlaced(): boolean - tells if the Robot is placed on the board


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
