import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  allFaceSnaps$!: Observable<FaceSnap[]>;

  constructor(private http: HttpClient) {}

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    // get<FaceSnap[]> specify the type returned by the get method
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
      return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1),
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap)),
      );
  }

  addFaceSnapByForm(formValue: {title:string, description: string, imageUrl: string, location?: string}) : Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(allFaceSnaps => [...allFaceSnaps].sort((a: FaceSnap, b : FaceSnap) => a.id - b.id)),
      map(sortedFacesSnaps => sortedFacesSnaps[sortedFacesSnaps.length - 1]),
      map(previousFaceSnap => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousFaceSnap.id + 1,
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap)),
    );
  }
}
