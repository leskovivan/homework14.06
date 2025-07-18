import React from 'react'
import Interesting_info from './interesting_info';
import Slider from './Slider';
import { NewProducts } from './NewProducts';
import { CardGroup } from './Card';
import Ideas_to_do from './ideas_to_do';
import Additional_recomendations from './Additional_recomendations';
import Important_info from './important_info';
import Start from './start';
import '../App.css';
const components = [
  { img: "Component 19.png" },
  { img: "Component 20.png"},
  { img: "Component 21.png" },
  { img: "Component 22.png"},
  { img: "Component 23.png"},
  { img: "Component 24.png"},
  { img: "Component 25.png"},
  { img: "Component 26.png"},
  { img: "Component 27.png"},
  { img: "Component 28.png"},
  { img: "Component 29.png"},
  { img: "Component 30.png"},
  { img: "Component 31.png"},
  { img: "Component 32.png"},
  { img: "Component 33.png"},
  { img: "Component 34.png"},
  { img: "Component 35.png"},
  { img: "Component 36.png" }
];
  const imageArray = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png'
  ];
  const imageArray2 = [
    'second (1).png',
    'second (2).png',
    'second (3).png',
    'second (4).png',
    'second (5).png',
    'second (6).png',
    'second (7).png',
    'second (8).png',
    'second (9).png',
    'second (10).png'
  ];
  



function Main_site() {
    return (
        <div>
            <Start></Start>
            <div id="container">
        <Interesting_info></Interesting_info>
    <Slider images={imageArray} text={"РЕКОМЕНДАЦІЇ"}></Slider>
    <Slider images={imageArray2} text={"НАЙКРАЩІ НАБОРИ"}></Slider>
    <NewProducts></NewProducts>
    <CardGroup arr={components}></CardGroup>
    <Ideas_to_do></Ideas_to_do>
    <Additional_recomendations></Additional_recomendations>
    <Important_info></Important_info></div></div>
    )
}

export default Main_site
