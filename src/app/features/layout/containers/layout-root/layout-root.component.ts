import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './layout-root.component.html',
  styleUrls: ['./layout-root.component.css']
})
export class LayoutRootComponent implements OnInit{
  ngOnInit(): void {
    localStorage.setItem('idCompany', '9d4e8dfd-5112-460d-8077-ffad9e282abd')
  }
}
