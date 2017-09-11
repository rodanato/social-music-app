import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  list: Array<any> = [
    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },    {
      type: 0,
      name: 'rodrigo'
    },
    {
      type: 0,
      name: 'eduardo'
    },
    {
      type: 1,
      name: 'luis'
    }
  ];
  filteredList: Array<any>;
  loading = true;

  constructor() { }

  ngOnInit() {
    // this.filterList()
    //   .then((res: any) => res)
    //   .then((res: any) => this.filteredList = res);

    const subscription = this.filterList2().subscribe(
      value => this.filteredList = value,
      error => {},
      () => this.loading = false
    );
  }

  filterList(): Promise<Array<any>> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.list.filter(item => item.type === 0));
      }, 2000);
    });
  }


  filterList2(): Observable<Array<any>> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.list.filter(item => item.type === 0));
      }, 2000);

      setTimeout(() => {
        observer.next(this.list.filter(item => item.name === 'rodrigo'));
        observer.complete();
      }, 4000);
    });
  }
}
