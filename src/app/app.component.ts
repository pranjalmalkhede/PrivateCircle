import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: any[] = [];
  search = '';
  details: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource = this.dataService.dataSource
  }

  searchData(search: HTMLInputElement) {
    if (search.value) {
      this.dataSource = this.dataService.dataSource.filter(d => {
        return d.name.toLowerCase().includes(search.value.toLowerCase())
      })
    } else {
      this.dataSource = this.dataService.dataSource
    }
  }

  getDetailsById(id: number) {
    this.details = this.dataService.getDetails(id);
  }

  getDetailsCount(id: number) {
    return this.dataService.getDetailsCount(id);
  }
}
