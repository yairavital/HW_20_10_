import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css'],
})
export class PartiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  partis: string[] = [
    'Likud',
    'There is a future',
    'The state camp',
    'Shas',
    'Torah Judaism',
    'Religious Zionism',
    'Israel is our Home',
    'the job',
    'March',
    'Jewish Home',
    'Taal',
  ];
  clicked(nameParti: string) {
    alert(nameParti);
  }
}
