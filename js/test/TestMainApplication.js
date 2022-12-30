const checkListsExist = () => {
    const listTypes = ['disc', 'circle', '1', 'A', 'I', 'i'];
    let listsExist = true;
  
    listTypes.forEach(listType => {
      const list = document.querySelector(`ul[style*='list-style-type:${listType}']`);
      const orderedList = document.querySelector(`ol[type='${listType}']`);
  
      const message = `List with list-style-type:${listType} or type ${listType}`;
      if (!list && !orderedList) {
        console.error(`${message} does NOT exist on the DOM.`);
        listsExist = false;
      } else {
        console.log(`${message} exists on the DOM.`);   
      }
    });
  
    return listsExist;
}
  
checkListsExist();
  