// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later


function closeModal() {
    let modalElements = document.getElementsByClassName("modalClose");
  
    if (modalElements.length > 0) {
        let bootstrapModalRight = bootstrap.Modal.getInstance(modalElements[0]);
        let bootstrapModalLeft  = bootstrap.Modal.getInstance(modalElements[1]);

        if (bootstrapModalRight) {
            bootstrapModalRight.hide();
        }else if (bootstrapModalLeft) {
            bootstrapModalLeft.hide();
        }
    }
}
  

function deActiveBiggerImages(){
        let windowWidth = window.innerWidth;
        let btns = document.querySelectorAll("#btn-img-open");

        //992 is the minimum width of the "lg column" in bootstrap
        if (windowWidth < 992) {
            let containers = document.querySelectorAll("#container");
            btns.forEach((e) => {
                e.setAttribute("data-bs-toggle", "");
                e.style.cursor = "default";
            })
            containers.forEach((i) => {                
            i.id = "containerClosed";
            })
            closeModal();
        }else{
            let containers = document.querySelectorAll("#containerClosed");
            btns.forEach((e) => {
                e.setAttribute("data-bs-toggle", "modal");
                e.style.cursor = "pointer";
            })
            containers.forEach((i) => {  
                i.id = "container";
            })
        }
}          
window.addEventListener('resize', deActiveBiggerImages);

document.addEventListener("DOMContentLoaded", deActiveBiggerImages);

window.addEventListener("load", deActiveBiggerImages);
