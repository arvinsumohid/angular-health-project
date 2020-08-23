import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  paramQuery: {}

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      this.paramQuery = data
      console.log(this.paramQuery['country'])
    })
  }

  ngOnInit(): void {
  }

}
