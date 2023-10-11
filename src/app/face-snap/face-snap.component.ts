import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // first declare the variables in the component
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  snapTitle!: string;

  // then initialize them on the ngOnInit method
  // this method is called when the component is created (each instances)
  ngOnInit(): void {
    this.title = "This is my title";
    this.description = "My description title";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAVQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EADQQAAIBAwMCBAQFBAIDAAAAAAECAwAEEQUSITFBEyJRYQZxgZEUMkKhsSMkwdFS4RWC8f/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAHBEBAQEBAQEBAQEAAAAAAAAAAAERIQJBMVES/9oADAMBAAIRAxEAPwDyAGsrZGTW8YpTGGmSbSaJlmfxCoFAacpkuFjX9R+1Wi/0GSLTkvYI5MhfMCdwcDqQQOCBzj0qXqZVPPYVwblXLKRRVmpJJBIpabvcoAyBRtlcbRnI5pbOGlWG0QsnmrVzCQjba3YTiROK1fSlVOOKh3VfhE3O9WpVOY426Z57UxmkOGJpJM2WPzro8RD1TATRMPLJt+dZSvOayn/yGtKOaxlqULis205B+gWzM1xcYyIVAwR3Of8AVeh6BcQx2xiuHkjSVeQecHsR7g1VdAtZYdFa4MYIuJysasM+KFGDgd8HNWa1cQWaQS20MMjPtV3kyrHtgdc/7qXrtX88kVH4q0z/AMbfF4wpgmJZCv5VOTlR7Dt7EUohl5ANehanpY1CY2M1q89wEMrCEEAYwM5zjp98D5Umb4Pt5dPjv7K8lEJj3bZEyzNycDHpx/NaXnS2XeONNbw7fcMmsupd8THdg0y07RLqPMcskf4cDcZxzxnsvWjY3022Mn4e3lkkToXYKXPue3yXn1JqOdVzig3NnqJBYwMEP5d7BSfkCc0qJJq76xcvcqfFCxn9Ma9AKpk2TPLn/m3810eKj7mI6ysPFZTJpzmu442kYKqksxwAO5rrAqSI7ZEPPDA8VtF6JpMM9tZWunuIpL+OMpFHuGIu5JPTJOPsaWXl7rq30WnRW9naCKcQBpl8QF/c9gM9a4/s4VjiuJY5tRB3mIp0zjo2e2Oc+9XbRoNM+I7do0JW/dQC6S4JIGOc5ycAdOcDrgDEbV82Yg0HVr3UdHivxGqy30ptbgkZ2FMg4Ppn+aeW1qLTTry3MYQCPwhM3Rc9cemM/tVc+EfiDSNISSwmeT8PZTvGq3Iw3iliTkHnJJ9KbfHlrqOt3FpZPYynQ4PPceCSTIzA7WYDkoCPfqCeOiXLen7IX6za20VrCNLmeZF4NxE2fDP3zj19qq2pXsdsniXEKSO44kbJDdemMDFNNJ0TUNPvfE0azjWFrXF5ECUgkYYCkE8bzzwPrigtXsXvtHkNqoJibJRCCQ36lPp2OKaZpe4rcc8Z8W4mxtiUttHGTVbJOcnr3qy/EDQR6PaxxPmWUAtjjK9eR9sZ9TVYwc1Xz/Uvd+Om5rK0Tisp0xgwCM0dp8yJdQsUjOHBwAwP8UEwFF6Wha7j2AFgc89gKWmi06Dp6PM91dI0ZuHLZYncRz05z+1OJviRNLffJJJ4attjCtu3H0CgkZ9sVW4JbiC5/ElZZUOQVIycH3qxaVb6dcOs22N7hQR05BPU1L6t8KPh34g0/Vfjie81mxiMkwVIVuYv1L3Ixjfg9cHpXsUurT3CFbJYTKB5VPHl47g+/Xkcc7c15pe6LZXzvE21DLu2OByr/pOfpRekTahpM8QvTC0efNKh2nPZsev+PpT2ywuJNR1G0vdT8LU2gUljs8VGKg+hIHB9DQ2o2sWlzwSWUge1uQGZN25Q69CM+3H0orVjDqCzoY1aRlO1QvP8cj9xS7TLWfUdAhsbuC6iuLdmBZo/Knoc/X7Gkzh96pPxa9vJrbpbIqRogUhOm7qSPv8AtSSVQCMVPfRPDdyo7BmVjyDQvPeqxC3a0VrVdEVlEBWaZaeTBBK2F8SQeXJ6Cpprm2UMiRR8DHmGaGhkkaNSNuW/Lzj9qS3TyYZQXm/hnKFRyM8VtNRnhkDxrtx1bZ1pK001rIdyqM9cqaZWrxXBCMnDHGMkbjS4bTWT4gYxxi4V4wW5Yfz881NeTR3lsDNeMq7wH5xxng0tuNNPghYgiKe2Ov3FJYbS5hvWUkjn8wP+6OSttj0DSbrRY/DVAskqkqN7ZLH5fensdysqNbQW/wCHhZSzSKMAjnmqBFBJHCDcybc8JG0m1n+3arpoFrm1eKZjseIjenbjsc0v03x5RfL/AHMmGVzuOSucE/WhNpoy7Vo5nRxhlYgj0obOOaqjUeMVlbLg1uiDgzs68HuetG2UjtEoVVynPAz9aW48zgfSjdPMKsDODg+vT60KMOY3hvIdhRGbpuc8E/SopdIe0iWW3k3SLyy9q4NvPZzJdQxtJFkgNjpTLT9ahkmEc3l5/MAD3+9J34fn0Zp98JraIGJBsXa6nI83Ix/9rt4kZ4jGcM7eUjjB/wCuK6S2geaWaBsNkHAII9jRg8M+DLjuSVPoBjj7/tSapnE0EUsEjSLH40uPzvyB/wCtNtFmubiVleEQhW5ZRtK/9fel9nc3GAYm3j/PerNp+oRJZyfik2YU5YdjWnaP5HjXxHGttrV5Cp3KsrYPrzmljOCCKa/Fkqza9duvd/vx9/vSU8mrxz1wxwayuuK1RBhGxtwI6Zou2h8U4zg9aHiAZhu+uKmtWPjEFivuDQY+0m9a2/oXRITsSM5+dH3mmw3kq+FtjdxlWAxg9qSOsxXyYOOu7v7+1EQXlxEVDquMcbDnt3qdn8Ul+VLEmrad/ThKEPkA5xnAzn2471Ppeq3sFrCl/af27SFlcnGVOcgH6/7oe41OB4XZ0mik8BkLFeDyOf2Fbe8mlK21jGxaFRJC6t+vAJ7YORnj1rZo7n4tE1ysEY/CLKsp80YccSe2R0NRST6rqEqwyWtxZwkednQDI/fNLPh+4DylIrq4hZs+LCyjaOecDpj2q4LqNtBB4UR8bYhOIW3Hgc9qE5w1715Vr86T6xcvGAEDbRg56cf4pdkVJeyCW7mkUAb3LcDHX2oZs5q0QdnFZUWTWUQ1LEGbfg8etTRXCpuV1JOMZBoVHIGF6mj7JFZ1LgE+9CtKIsru2VGSRWdT64ruWS1OFs9wk75Ctz+9bm01XQtCgZjjnHlHy9aFbTjb4MsmWz+UUvD9SWxE8jRXXCnjd/wOc5H7000yOTayjzRsRnachsYz8un0496CggQ+QHAOSuD3FNbDxIZDJvAJA8wABI+Y6/OltGQytLdkSeV1ZjISuc+deOnHXsR/FL7r8Rb2ksqToFI8PaVI35+fBNSJevHOBE54yCK7+JXZLO3Ysf6oLEDhftQ8jfxTJgdxz1qFqMkKk9KiZAelVTDVlduhzWVgf//Z";
    this.snapTitle = "oh, snap!"
  }

  onSnap() {
    if (this.snapTitle === "oh, snap!") {
      this.snaps++;
      this.snapTitle = "Oops, unSnap!"
    }
    else {
      this.snaps--;
      this.snapTitle = "oh, snap!"
    }
  }
}
