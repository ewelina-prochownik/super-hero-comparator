import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shc-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private _authService: AuthService, private _fb: FormBuilder) {
    this._authService.logout();
  }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this._fb.group({
      accessToken: ['', [Validators.required]]
    });
  }

  public login() {
    this._authService.login(this.loginForm?.get('accessToken')?.value);
  }
}
