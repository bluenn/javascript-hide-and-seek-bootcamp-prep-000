function getFirstSelector(selector) {
  //const li2 = document.querySelector('ul.ranked-list');

  return document.querySelector(selector);
}
getFirstSelector("ul.ranked-list");

 function nestedTarget()
   return document.querySelector(#nested.target);
     //return document.getElementById("nested").querySelector(".target");
 }
function increaseRankBy(n) {
  // const x = document.querySelectorAll('ul.ranked-list li');
  // for (let i = 0; i < x.length; i++) {
  //   x[i].innerHTML = parseInt(x[i].innerHTML) + n;

  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }  
  }
}
function deepestChild()
var currentNode = document.querySelector('#grand-node');
   var nextNode = grandNode.children[0];
   while (nextNode) {
    currentNode = nextNode
    nextNode = currentNode.children[0]
  }
}   
