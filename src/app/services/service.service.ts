import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, timeout, map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Platform, ToastController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  [x: string]: any;
  Data: any;
  DataLogin: any;
  DataResponse: any;
  DataCheckLogin: any;
  authenticationState = new ReplaySubject();
  token: any;
  API_URL = "http://localhost:8080/api/";
  TOKEN_KEY = 'accesstoken';
  REFRESH_TOKEN_KEY = 'refreshtoken';
  ROLE = 'role';
  server: string;

  constructor(
    private http: HttpClient,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
  }


  options(arg0: string, options: any) {
    throw new Error('Method not implemented.');
  }

  //jika token tidak ada maka authenticationState=false
  //jika token ada maka akan memanggil fungsi cekUser
  checkToken() {
    if (localStorage.getItem(this.TOKEN_KEY) == null || localStorage.getItem(this.TOKEN_KEY) == '') {
      this.authenticationState.next(false);
    } else {
      this.CekUser().subscribe(data => {
        this.DataCheckLogin = data;
        if (this.DataCheckLogin.status == "success") {
          this.authenticationState.next(true);
        } else {
          this.authenticationState.next(false);
        }
      },
        err => {
          this.authenticationState.next(false);
        });
    }
  }

  //cek user di sisi client
  CekUser() {

    //ambil data dari localstorage
    let dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token = dataStorage;
    // console.log("token : " + this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });
    return this.http.get(this.API_URL + 'users/my', { headers: headers, observe: 'response' })
      .pipe(
        timeout(8000),
        tap(Data => {
          return Data;
        }),

      );
  }

  //login
  loginApi(credentials, type) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.API_URL + type, credentials, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataLogin = Data.body;
        if (Data.status == 200) {
          localStorage.setItem(this.TOKEN_KEY, JSON.stringify(this.DataLogin.access_token));
          localStorage.setItem(this.REFRESH_TOKEN_KEY, JSON.stringify(this.DataLogin.refresh_token));
          localStorage.setItem(this.ROLE, JSON.stringify(this.DataLogin.roles[1]));
          localStorage.setItem("user", JSON.stringify(this.DataLogin));
          localStorage.setItem("roles", JSON.stringify(this.DataLogin.roles));
          this.authenticationState.next(true);
        } else {
          this.authenticationState.next(false);
        }
        return Data;
      }),
      catchError((err, caught) => {
        let message = "error";
        if (err.status == 404) {
          message = 'User belum terdaftar. Silahkan hubungi admin.';
        } else if (err.status == 401) {
          message = 'NRP dan kata sandi tidak cocok. Silahkan coba lagi.';
        } else {
          message = 'Tidak ada koneksi internet. Silakan periksa koneksi Anda.';
        }
        return throwError(message);
      })
    );
  }



  //register
  RegisterApi(credentials, type) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.API_URL + type, credentials, { headers: headers }).pipe(
      tap(Data => {
        this.DataLogin = Data;
        if (this.DataLogin.status == "success") {
          localStorage.setItem(this.TOKEN_KEY, JSON.stringify(Data));
          this.authenticationState.next(true);
        } else {
          this.authenticationState.next(false);
        }
        return Data;
      }),
    );
  }

  submitaduan(form, url) {
    let dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token = dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });
    return this.http.post(this.API_URL + url, form, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataLogin = Data;
        let message = 'Data Anda terkirim.';
        return message;
      }),
      catchError((err) => {
        let message = "Gagal Terkirim, Mohon Data Diisi Lengkap!";
        return throwError(err);
      })
    );
  }

  getRecord(url) {
    let dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token = dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });
    return this.http.get(this.API_URL + url, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataRecord = Data.body;
        let message = 'Koneksi APi Berhasil!';
        return message;

      }),
      catchError((err, caught) => {
        let message = "Gagal Koneksi API!";
        return throwError(message);
      }),
    );
  }

  getRecord2(url) {
    let dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token = dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });
    return this.http.get(this.API_URL + url, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataRecord2 = Data.body;
        let message = 'Koneksi APi Berhasil!';
        return message;

      }),
      catchError((err, caught) => {
        let message = "Gagal Koneksi API!";
        return throwError(message);
      }),
    );
  }


  updateaduan(form, url) {
    let dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token = dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });
    return this.http.put(this.API_URL + url, form, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataResponse = Data;
        let message = 'Data Anda terupdate.';
        return message;
      }),

      catchError((err) => {
        let message = "Gagal update! ";
        return throwError(err);
      })
    );
  }

  //logout
  signout() {
    this.authenticationState.next(false);
  }

  updateStatus(form, url, id) {
    let dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
    this.token = dataStorage;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });
    return this.http.put(this.API_URL + url + id, form, { headers: headers, observe: 'response' }).pipe(
      tap(Data => {
        this.DataLogin = Data;
        let message = 'Data Anda terkirim.';
        return message;
      }),
      catchError((err) => {
        let message = "Gagal Terkirim, Mohon Data Diisi Lengkap!";
        return throwError(err);
      })
    );
  }

  getUserName() {
    if (localStorage.getItem('user') !== null) {
      const user = JSON.parse(localStorage.getItem('user'));
      return user.user.name;
    } 
    else return 'User';
  }

  getUserRole() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.roles[2];
  }

  isHasAccessDashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    const roleUser = user.roles[2];
    return (roleUser !== 'ROLE_CUS')
  }

  isHasAccess(_feature: string, _section: string, _action: string) {
    const user = JSON.parse(localStorage.getItem('user'));
    const roleUser = user.roles[2];

    let feature = this.featuresApp.find(e => e.feature === _feature);
    if (feature == null) return false;

    let section = feature.sections.find(e => e.section === _section);
    if (section == null) return false;

    let action = section.actions.find(e => e.action === _action);
    if (action == null) return false;

    return !!action.hasAccess.find(item => JSON.stringify(item) === JSON.stringify(roleUser));
  }

  featuresApp =
    [
      {
        'feature': 'CATERING',
        'sections':
          [
            {
              'section': 'COMPLAINT',
              'actions':
                [
                  {
                    'action': 'VIEW',
                    'hasAccess': ['ROLE_MT', 'ROLE_HK', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'ADD',
                    'hasAccess': ['ROLE_CUS', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'EDIT',
                    'hasAccess': ['ROLE_PROG', 'ROLE_HCGS']
                  },
                ]
            },
            {
              'section': 'RATING',
              'actions':
                [
                  {
                    'action': 'VIEW',
                    'hasAccess': ['ROLE_MT', 'ROLE_HK', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'ADD',
                    'hasAccess': ['ROLE_CUS', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                ]
            }
          ]
      },
      {
        'feature': 'HOUSEKEEPING',
        'sections':
          [
            {
              'section': 'COMPLAINT',
              'actions':
                [
                  {
                    'action': 'VIEW',
                    'hasAccess': ['ROLE_MT', 'ROLE_HK', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'ADD',
                    'hasAccess': ['ROLE_CUS', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'EDIT',
                    'hasAccess': ['ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                ]
            },
            {
              'section': 'TASK',
              'actions':
                [
                  {
                    'action': 'VIEW',
                    'hasAccess': ['ROLE_HK', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'ADD',
                    'hasAccess': ['ROLE_HK', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'EDIT',
                    'hasAccess': ['ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                ]
            }
          ]
      },
      {
        'feature': 'LAUNDRY',
        'sections':
          [
            {
              'section': 'COMPLAINT',
              'actions':
                [
                  {
                    'action': 'VIEW',
                    'hasAccess': ['ROLE_MT', 'ROLE_HK', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'ADD',
                    'hasAccess': ['ROLE_CUS', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'EDIT',
                    'hasAccess': ['ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                ]
            },
          ]
      },
      {
        'feature': 'MAINTENANCE',
        'sections':
          [
            {
              'section': 'COMPLAINT',
              'actions':
                [
                  {
                    'action': 'VIEW',
                    'hasAccess': ['ROLE_MT', 'ROLE_HK', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'ADD',
                    'hasAccess': ['ROLE_CUS', 'ROLE_SPV', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'EDIT',
                    'hasAccess': ['ROLE_MT', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                ]
            },
            {
              'section': 'TASK',
              'actions':
                [
                  {
                    'action': 'VIEW',
                    'hasAccess': ['ROLE_MT', 'ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'ADD',
                    'hasAccess': ['ROLE_MT', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                  {
                    'action': 'EDIT',
                    'hasAccess': ['ROLE_GS', 'ROLE_PROG', 'ROLE_HCGS']
                  },
                ]
            }
          ]
      }
    ];
}