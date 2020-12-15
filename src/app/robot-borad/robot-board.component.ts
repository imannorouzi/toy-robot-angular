import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Robot} from '../robot';

@Component({
  selector: 'app-robot-board',
  templateUrl: './robot-board.component.html',
  styleUrls: ['./robot-board.component.css']
})
export class RobotBoardComponent implements OnInit {

  @Output() placeChanged: EventEmitter<string> = new EventEmitter();

  @Input() rows = 5;
  @Input() cols = 5;
  @Input() robot: Robot;

  constructor() { }

  ngOnInit() {
  }

  place(col: number, row: number) {
    const face = (this.robot && this.robot.isRobotPlaced() ? this.robot.face() : 'NORTH');
    this.placeChanged.emit('PLACE ' + (col + 1) + ',' + (row + 1) + ','  + face);
  }
}
