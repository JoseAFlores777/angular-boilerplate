import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './profile.component.html',
})
export class ProfileComponent {
    username = inject(ActivatedRoute).snapshot.paramMap.get('username');
}
