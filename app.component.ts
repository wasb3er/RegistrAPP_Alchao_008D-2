import { Component } from '@angular/core';


interface Componente{
  name:string;
  icon:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[

    {
      name:'Inicio',
      redirecTo: '/inicio',
      icon:'home-outline'
    },
    {
      name:'Login',
      redirecTo: '/login',
      icon:'cafe-outline'
    },
    {
      name:'Registrarse',
      redirecTo: '/registrarse',
      icon:'cafe-outline'
    },
    {
      name:'Informacion-App',
      redirecTo: '/informacion-app',
      icon:'cafe-outline'
    },

  ]

  constructor() {}
}
