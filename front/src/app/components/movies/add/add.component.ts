import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/models/movie.model'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
@Injectable()
export class AddComponent implements OnInit {
    form: FormGroup;
    httpClient: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private http: HttpClient
  ) { }


  ngOnInit() {
      this.form = this.formBuilder.group({
          title: ['',[Validators.required, Validators.maxLength(100), Validators.minLength(2)]],
          description: ['',[Validators.required, Validators.maxLength(100), Validators.minLength(2)]],
          date: Date
      });
  }


  onSave() {
      console.log(this.form.value);
      this.http.post("http://localhost:8000/movies",this.form.value)
       .subscribe(
           () => {
               this.form.reset();
               this.router.navigate(['/movies/list'])
           },
           error => {
               console.log("Error", error);
           }
       );

  }
}
