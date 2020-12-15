import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {RobotResponse} from '../robot';

@Component({
  selector: 'app-command-history',
  templateUrl: './command-history.component.html',
  styleUrls: ['./command-history.component.css']
})
export class CommandHistoryComponent implements OnInit {
  @ViewChild('commandList', {static: true}) private commandList: ElementRef;

  @Output() redoCommand: EventEmitter<string> = new EventEmitter();

  history: RobotResponse[] = [];
  constructor() { }

  ngOnInit() {
  }

  addCommand( command: RobotResponse ) {
    this.history.push(command);
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      setTimeout( () => {
        this.commandList.nativeElement.scrollTop = this.commandList.nativeElement.scrollHeight;
      }, 100);

    } catch (err) { }
  }

  repeatCommand(command: string) {
    this.redoCommand.emit(command);
  }
}
