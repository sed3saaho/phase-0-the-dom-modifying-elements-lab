// Write your code here!

  let newHeader;

  before(() => {
    newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.innerHTML = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with the actual name
    document.body.appendChild(newHeader);
  });

  
      const mainNode = document.querySelector('main#main');
      if (mainNode) {
        mainNode.remove();
      }
      

    

   