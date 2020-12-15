// This object is used to convert face strings to face numbers (indexes). This helps to
// turn left and right easier just by decreasing and increasing a number
const FACE = [ 'NORTH', 'EAST', 'SOUTH', 'WEST' ];

/**
 * Robot Object
 *
 * Description: It is better to create this in a ts file to be able to define data types and make it more readable
 * but I decided to deliver this application in pure javascript and that's why I'm not using data types
 *
 * Description. (use period)
 *
 * @author Iman Norouzi
 */
export class Robot {

  // It's not needed to declare 'undefined' members in js, but I just put them to introduce the Robot object

  // size of the board
  boardCols; boardRows;

  // x keeps horizontal index (column) and y keeps the vertical index (row) starting from 0
  x; y;

  /*
   * facing direction. I used it as a number in which
   * 0 is North
   * 1 is East
   * 2 is South
   * 3 is West
   */
  f;

  /**
   * Description: Places the robot in position (x, y) facing f direction and returns true if place is valid
   */
  place(x, y, f) {

    // check if the place is valid
    if ( x < 0 ||
      x > this.boardCols ||
      y < 0 || y > this.boardRows ||
      FACE.indexOf(f) === -1
    ) {
      // place is not valid
      return new RobotResponse( 'PLACE ' + x + ',' + y + ',' + f, false, 'Place is not valid!');
    }

    this.x = x;
    this.y = y;
    this.f = FACE.indexOf(f);
    return new RobotResponse( 'PLACE ' + x + ',' + y + ',' + f, true, '');
  }

  /**
   * Description: Constructor to instantiate a Robot object. Sets the board limits.
   */
  constructor(boardCols, boardRows) {
    this.boardCols = boardCols;
    this.boardRows = boardRows;
  }

  /**
   * Description: Turns the robot to the 90 degrees to the left and returns true if success (which is always after robot has been placed)
   */
  left() {
    if (!this.isRobotPlaced()) {
      return new RobotResponse( 'MOVE', false, 'Robot is not placed yet!');
    }

    // decrease f by 1 and ensure it's between 0 and 3
    this.f = ((this.f - 1) + FACE.length) % FACE.length;
    return new RobotResponse( 'LEFT', true, '');
  }

  /**
   * Description: Turns the robot to the 90 degrees to the right and returns true if success (which is always after robot has been placed)
   */
  right() {
    if (!this.isRobotPlaced()) {
      return new RobotResponse( 'MOVE', false, 'Robot is not placed yet!');
    }
    // increase f by 1 and ensure it's between 0 and 3
    this.f = (this.f + 1) % FACE.length;
    return new RobotResponse( 'LEFT', true, '');
  }

  /**
   * description: Moves robot one step forward and return true if there is space forward otherwise returns false
   */
  move(): RobotResponse {

    // Check if robot has been placed
    if (!this.isRobotPlaced()) {
      return new RobotResponse( 'MOVE', false, 'Robot is not placed yet!');
    }

    switch (this.f) {
      case 0: // NORTH
        if (this.y < this.boardRows) {
          // move forward vertically
          this.y = this.y + 1;
        } else {
          // it would fall out
          return new RobotResponse( 'MOVE', false, 'Robot would fall out!');
        }
        break;

      case 1: // EAST
        if (this.x < this.boardCols) {
          // move forward horizontally
          this.x = this.x + 1;
        } else {
          // it would fall out
          return new RobotResponse( 'MOVE', false, 'Robot would fall out!');
        }
        break;

      case 2: // SOUTH
        if (this.y > 1) {
          // move back vertically
          this.y = this.y - 1;
        } else {
          // it would fall out
          return new RobotResponse( 'MOVE', false, 'Robot would fall out!');
        }
        break;

      case 3: // WEST
        if (this.x > 1) {
          // move back horizontally
          this.x = this.x - 1;
        } else {
          // it would fall out
          return new RobotResponse( 'MOVE', false, 'Robot would fall out!');
        }
        break;

    }

    return new RobotResponse( 'MOVE', true, '');
  }

  /**
   * Description: returns the state of the robot in the format of 'Output X,Y,FACE' if robot has placed before
   */
  report(): RobotResponse {
    // check if robot is placed
    if (this.isRobotPlaced()) {
      return new RobotResponse( 'REPORT', true, 'Output: ' + this.x + ',' + this.y + ',' + this.face());
    }
    return new RobotResponse( 'REPORT', false, 'Robot is not placed yet!');
  }

  face() {
    return this.isRobotPlaced() ? FACE[this.f] : undefined;
  }


  /**
   *
   * Description: returns true if x, y and f have values which means robot has placed on the board
   */
  isRobotPlaced() {
    return typeof this.x !== 'undefined' &&
      typeof this.y !== 'undefined' &&
      typeof this.f !== 'undefined';
  }
}

export class RobotResponse {
  actionPerformed: boolean;
  command: string;
  message: string;

  constructor(command, actionPerformed, message) {
    this.actionPerformed = actionPerformed;
    this.command = command;
    this.message = message;
  }
}
