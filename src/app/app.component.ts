import {Component, OnInit, ViewChild} from '@angular/core';
import {Robot, RobotResponse} from './robot';
import {CommandHistoryComponent} from './command-history/command-history.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('commandHistory', {static: false}) commandHistory: CommandHistoryComponent;

  title = 'Toy Robot Software';
  robot: Robot;
  command: '';

  rows = 5; cols = 5;

  ngOnInit(): void {
    this.robot = new Robot( 5, 5 );
  }

  /**
   * Description: This is triggered when a file is selected by the user. It tries to read the content of the file and
   * send it line by line to the robot to be executed as a command
   */
  readInputFile(event: any) {
    if (event.files.length > 0) {
      const file = event.files[0];

      // TODO: we need to check if the FileReader is available
      const reader = new FileReader();

      // set onload listener
      reader.onload = (e: any) => {
        const lines = e.target.result.split('\n');
        lines.forEach( line => {
          if (line) {
            this.executeCommand(line);
          }
        });
      };

      // read the file as text
      reader.readAsText(file);

      // clear the file input, so we can select the same file again
      event.target.innerHTML = '';
    }
  }

  /**
   * Description: Triggers once a keyUp event happens for single input field.
   */
  executeCommand(command) {
    // if it's an 'Enter' key take the value as a command and send it to robot
    this.processCommand(command);
  }

  inputEnterPressed() {
    this.executeCommand(this.command.toUpperCase());

    // clear the input
    this.command = '';
  }

  /**
   * Description: receives a line of input, checks it's validity and performs the command, if the command has an
   * effect on the robot state or command = 'REPORT', it would return actionPerformed as true otherwise actionPerformed
   * would be false. For some commands like 'REPORT' robot needs to return some message which is
   * communicated using message filed in the return object
   *
   */
  processCommand(line) {


    // check the command syntax using regex test.
    const command = line.split(' ');
    let result;
    // allowed commands are MOVE, LEFT, RIGHT, REPORT and PLACE x,y,FACE
    if (/(MOVE|LEFT|RIGHT|REPORT|(PLACE \d,\d,(NORTH|EAST|WEST|SOUTH)))/.test(line)) {

      // the first chunk is the main command
      switch (command[0]) {
        case 'PLACE':

          // The second chunk is place command parameters comma separated.
          const args = command[1].split(',');
          const x = Number(args[0]);
          const y = Number(args[1]);
          const face = args[2];

          // try to place the robot
          result = this.robot.place(x, y, face);
          break;

        case 'MOVE':
          result = this.robot.move();
          break;
        case 'LEFT':
          result = this.robot.left();
          break;
        case 'RIGHT':
          result = this.robot.right();
          break;
        case 'REPORT':
          result = this.robot.report();
          break;
      }
    } else {
      // regex test failed which means command format is not as expected.
      result = new RobotResponse(line, false, 'Command Not Recognized!');
    }

    this.commandHistory.addCommand(result);
  }
}
