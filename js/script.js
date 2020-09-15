document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.wrap').classList.toggle('_activewrap');
    document.querySelector('.sidebar').classList.toggle('_activesidebar');
    document.querySelector('.burger').classList.toggle('_activeburger')
});
//?burger end-------------------------------------------------------------------------------------
let JonhSmith = document.querySelector('#name1').textContent;
let IlonMask = document.querySelector('#name2').textContent;
let BradPitt = document.querySelector('#name3').textContent;
let SteveJobs = document.querySelector('#name4').textContent;
let SteveMorgan = document.querySelector('#name5').textContent;
let MartinIden = document.querySelector('#name6').textContent;

document.querySelector('#ourstaff__object1').addEventListener('click', () => {
    document.getElementById('slot').innerHTML = JonhSmith;
    lengthScale(71, 53, 69, 93);                                       //!Проценты шкалы
})
document.querySelector('#ourstaff__object2').addEventListener('click', () => {
    document.getElementById('slot').innerHTML = IlonMask;
    lengthScale(89, 80, 92, 62);
})
document.querySelector('#ourstaff__object3').addEventListener('click', () => {
    document.getElementById('slot').innerHTML = BradPitt;
    lengthScale(70, 51, 59, 80);
})
document.querySelector('#ourstaff__object4').addEventListener('click', () => {
    document.getElementById('slot').innerHTML = SteveJobs;
    lengthScale(80, 70, 40, 95);
})
document.querySelector('#ourstaff__object5').addEventListener('click', () => {
    document.getElementById('slot').innerHTML = SteveMorgan;
    lengthScale(50, 66, 47, 80);
})
document.querySelector('#ourstaff__object6').addEventListener('click', () => {
    document.getElementById('slot').innerHTML = MartinIden;
    lengthScale(95, 88, 90, 62);
})

function lengthScale(webDesign, webDev, Plug, Front) {
    document.getElementById('lengthScale1').style.left = webDesign + '%';
    document.getElementById('lengthScale2').style.left = webDev + '%';
    document.getElementById('lengthScale3').style.left = Plug + '%';
    document.getElementById('lengthScale4').style.left = Front + '%';

    document.getElementById('percent1').innerHTML = webDesign + '%';
    document.getElementById('percent2').innerHTML = webDev + '%';
    document.getElementById('percent3').innerHTML = Plug + '%';
    document.getElementById('percent4').innerHTML = Front + '%';
}

// ? End lengthScale--============================================================================

//?Preloader=====================================================================================
window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};
//?End Preloader=====================================================================================