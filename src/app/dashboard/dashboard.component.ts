import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cardContent = [
    { title: "Blog / Article", subtitle: "from ₹500"},
    { title: "Newsletter/ E-mailer", subtitle: "from ₹1000"},
    { title: "Whitepaper", subtitle: "from ₹2000"},
    { title: "e-book", subtitle: "from ₹1000"},
    { title: "Report / Guide", subtitle: "from ₹1000"},
    { title: "Product Description", subtitle: "from ₹500"},
    { title: "Website Content", subtitle: "from ₹1000"},
    { title: "Video Script", subtitle: "from ₹1000"},
    { title: "Company Profile / Brochure", subtitle: "from ₹2000"},
    { title: "Press Release", subtitle: "from ₹2000"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
