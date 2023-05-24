const locations = document.querySelectorAll('.location');
locations.forEach((location) => {
   location.addEventListener('click',() =>{
      removeActiveclasses();
      location.classList.add('active');
   })
})
function removeActiveclasses(){
   locations.forEach(location => {
      location.classList.remove('active');
   })
}