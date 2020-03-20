import "core-js/features/array/map";
import "core-js/features/map";
import "core-js/features/promise";
import "regenerator-runtime/runtime";
import gsap from '../src/index';
import './App.scss';


function runTween() {
    gsap.to('.app-container', {background: '#000',height: 600});
}

// runTween();

function runTimeline() {

    // 新建时间轴
    var tl = gsap.timeline();
    tl.to('.app-container', {background: '#060',height: 600});

    
}

// setTimeout(() => {
//     gsap.to('.app-container', {background: '#030',height: 600});
// }, 3000);
runTimeline();