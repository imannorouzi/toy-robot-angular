import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {Robot} from '../../src/app/robot';

const commandsContainer = [
  {
    commands:   [
      'PLACE 1,2,EAST',
      'MOVE',
      'MOVE',
      'LEFT',
      'LEFT',
      'MOVE',
      'REPORT'
    ],
    result: 'Output: 2,2,WEST'
  },
  {
    commands:   [
      'PLACE 1,2,EAST',
      'MOVE',
      'MOVE',
      'LEFT',
      'MOVE',
      'REPORT'
    ],
    result: 'Output: 3,3,NORTH'
  }
];

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Toy Robot Software');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  /************** Robot tests */
  let robot;
  it('should create an instance of Robot', () => {
    robot = new Robot(5, 5);
    expect(robot).toBeTruthy();
  });

  it('should place a robot on the board', () => {
    expect(robot.place(1, 1, 'NORTH').actionPerformed).toBeTruthy();
  });

  it('should turn the robot left', () => {
    expect(robot.left().actionPerformed).toBeTruthy();
  });

  it('should turn the robot right', () => {
    expect(robot.right().actionPerformed).toBeTruthy();
  });

  it('should move the robot forward', () => {
    expect(robot.move().actionPerformed).toBeTruthy();
  });

  it('should report the robot position', () => {
    expect(robot.report().message).toEqual('Output: 1,2,NORTH');
  });

  commandsContainer.forEach( (commandsObj, index) => {
    const testRobot = new Robot(5, 5);
    commandsObj.commands.forEach( command => {

      const cmd = command.split(' ');

      if (command === 'REPORT') {
        it( 'should move the robot as expected ' + (index + 1), () => {
          const output = testRobot.report();
          expect(output.message).toEqual(commandsObj.result);
        });
      } else {
        switch (cmd[0]) {
          case 'PLACE':
            const args = cmd[1].split(',');
            const x = Number(args[0]);
            const y = Number(args[1]);
            const face = args[2];

            // try to place the robot
            testRobot.place(x, y, face);
            break;
          case 'MOVE':
            testRobot.move();
            break;
          case 'LEFT':
            testRobot.left();
            break;
          case 'RIGHT':
            testRobot.right();
            break;
        }
      }
    });
  });
});
