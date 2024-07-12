import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TeamData } from '../../core/interfacies/teamData';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  data: TeamData[] = [
    {
      id: '1',
      img: './assets/mostafa.jpg',
      name: 'Mostafa Ibrahim',
      profession: 'Campus Director',
    },
    {
      id: '2',
      img: './assets/shehawy.jpg',
      name: 'Ahmed Shehawy',
      profession: 'Vice Director',
    },
    {
      id: '3',
      img: './assets/sara.jpg',
      name: 'Sara Elwan',
      profession: 'Vice Director',
    },
    {
      id: '4',
      img: './assets/menna.jpg',
      name: 'Menna Rafat',
      profession: 'HR Head',
    },
    {
      id: '5',
      img: './assets/zinap.jpg',
      name: 'Zinap Mohamed',
      profession: 'HR Vice',
    },
    {
      id: '6',
      img: './assets/ff.jpg',
      name: 'Farahat Adel',
      profession: 'Marketiing Leader',
    },
    {
      id: '7',
      img: './assets/yousef.jpg',
      name: 'Yousef Nour',
      profession: 'Marketiing Vice',
    },
    {
      id: '8',
      img: './assets/zabdullah.jpg',
      name: 'Zinap Abdullah',
      profession: 'Marketiing Vice',
    },
    {
      id: '9',
      img: './assets/znaty.jpg',
      name: 'Ahmed Znaty',
      profession: 'Media Leader',
    },
    {
      id: '10',
      img: './assets/fawzy.jpg',
      name: 'Ahmed Fawzy',
      profession: 'Media Vice',
    },
    {
      id: '11',
      img: './assets/noha.jpg',
      name: 'Noha Ibrahim',
      profession: 'Media Vice',
    },
    {
      id: '12',
      img: './assets/ola.jpg',
      name: 'Ola Elbrmawey',
      profession: 'PR Leader',
    },
    {
      id: '13',
      img: './assets/ahlam.jpg',
      name: 'Ahlam Fekry',
      profession: 'PR Vice',
    },
  ];

  BoardOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    margin: 10,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },

  };
}
