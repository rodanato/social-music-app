import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  userName: string;
  serverRepliedWell = false;

  ngOnInit() {
  //   const getUserName = new Promise(
  //     (resolve, reject) => {
  //       if (this.getUserName()) {
  //         const response = {
  //           userName: 'Pedro'
  //         };
  //         resolve(response);
  //       } else {
  //         reject(new Error('Server problem'));
  //       }
  //     }
  //
  // );
  //
  //   const checkAuthentication = () => {
  //     getUserName
  //       .then((response: any) => {
  //         this.userName = response.userName;
  //         this.isLoggedIn = true;
  //       })
  //       .catch((error) => {
  //         this.isLoggedIn = false;
  //         console.log(error.message);
  //       });
  //   };

    // checkAuthentication();

  }

  getUserName() {
    setTimeout(() => {
      return true;
    }, 3000);

  }

}
