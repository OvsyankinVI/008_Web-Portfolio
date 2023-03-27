document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var modal = document.querySelectorAll('.modal');
    var instances_modal = M.Modal.init(modal);
  });

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements_1 = document.querySelectorAll('.item-1');
  let elements_2 = document.querySelectorAll('.item-2');
  let elements_3 = document.querySelectorAll('.item-3');
  
  for (let elm of elements_1) {
    observer.observe(elm);
  }
  for (let elm of elements_2) {
    observer.observe(elm);
  }
  for (let elm of elements_3) {
    observer.observe(elm);
  }