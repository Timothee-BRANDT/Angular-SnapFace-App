// public mean this class got all thoses attributes, and you can passed them to the constructor agruments
export class FaceSnap {
    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdDate: Date,
                public snaps: number) {
    };
} 