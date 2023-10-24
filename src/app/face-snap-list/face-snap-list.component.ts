import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable, Subject, interval } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps$!: Observable<FaceSnap[]>;

  // Subject is an observable available to emit on demand
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();

    interval(1000).pipe(
      takeUntil(this.destroy$), // listen the observable until destroy emit something
      tap(console.log)
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true); // called him to emit true onDestroy
  }
}
