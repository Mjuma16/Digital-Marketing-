// execute script after page load
window.onload=function digital_fn(){
    let toggle=document.querySelector("#nav .toggle-btn");
    let collpase=document.querySelector("#nav .collapse");

    toggle.addEventListener('click',function(event){
        collpase.classList.toggle('active');
    });


    //masonry Part
    let grid=document.querySelector(".recent_work_part .title .recent_images");
    let msnry=new Masonry(grid,{
        itemSelector:'.flex_item', //it will select flex_item using query selector;
        gutter:100, //gutter will add some spaces between grid item
        fitwidth:true,
})
}
