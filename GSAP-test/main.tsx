import "core-js/features/array/map";
import "core-js/features/map";
import "core-js/features/promise";
import "regenerator-runtime/runtime";
import gsap from '../src/index';
import './App.scss';


console.log(gsap)
gsap.to('.app-container', {background: '#000',height: 600})