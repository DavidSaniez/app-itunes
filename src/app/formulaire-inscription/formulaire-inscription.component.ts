import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.scss']
})
export class FormulaireInscriptionComponent implements OnInit {

  user: FormGroup;
  usersList: Object[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      pseudo: new FormControl(''),
      password: new FormControl(''),
    })
  }

  onSubmit(): void {
    this.usersList.push(this.user.value)
    console.table(this.usersList)
  }

}
