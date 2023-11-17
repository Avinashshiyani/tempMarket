// faq dropdown
function dropDown(first = 'faqdropdown',second = 'dropdownarrow', third = 'maindropdown'){
    let dropDown = document.querySelector(`.${first}`);
    let dropDownArrow = document.querySelector(`.${second}`);
    let mainDropDown = document.querySelector(`.${third}`);
    dropDown.addEventListener('click',()=>{
        mainDropDown.classList.toggle('h-auto');
        mainDropDown.classList.toggle('pb-[32px]');
        dropDownArrow.classList.toggle('fa-rotate-180');
    });
}
dropDown();
// 2nd dropdown
dropDown('faqdropdowntwo','dropdownarrowtwo','maindropdowntwo');
// 3rd dropdown
dropDown('faqdropdownthree','dropdownarrowthree','maindropdownthree');
// 4th dropdown
dropDown('faqdropdownfour','dropdownarrowfour','maindropdownfour');
// 5th dropdown
dropDown('faqdropdownfive','dropdownarrowfive','maindropdownfive');
// 6th dropdown
dropDown('faqdropdownsix','dropdownarrowsix','maindropdownsix');