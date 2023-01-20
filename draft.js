// async function startApp() {
//     try {
//         loadingElement.style.visibility = 'visible';
    
//         const endpoint = 'repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
//         const fighters = await callApi(endpoint);
        
//         const fightersElement = createFighters(fighters);
//         rootElement.appendChild(fightersElement);

//       } catch (error) {
//         console.warn(error);
//         rootElement.innerText = 'Failed to load data';
//       } finally {
//         loadingElement.style.visibility = 'hidden';
//       }
//   }



//  function createElement({ tagName, className = '', attributes = {} }) {
//     const element = document.createElement(tagName);
//     element.classList.add(className);
      
//     Object
//       .keys(attributes)
//       .forEach(key => element.setAttribute(key, attributes[key]));
  
//     return element;
//   }

//   function createName(name) {
//     const nameElement = createElement({ tagName: 'span', className: 'name' });
//     nameElement.innerText = name;
  
//     return nameElement;
//   }
  
//   function createImage(source) {
//     const attributes = { src: source };
//     const imgElement = createElement({
//       tagName: 'img',
//       className: 'fighter-image',
//       attributes
//     });
  
//     return imgElement;
//   }

//   function createFighter(fighter) {
//     const { name, source } = fighter;
//     const nameElement = createName(name);
//     const imageElement = createImage(source);
//     const element = createElement({ tagName: 'div', className: 'fighter' });
  
//     element.append(imageElement, nameElement);
  
//     element.addEventListener('click', (event) => handleFighterClick(event, fighter), false)

//     function handleFighterClick(event, fighter) {
//       const { _id } = fighter;
    
//       if(!fightersDetailsMap.has(_id)) {
//         // send request here
//         fightersDetailsMap.set(_id, fighter);
//       }
    
//       console.log(fightersDetailsMap.get(_id));
//     }
//     return element;
//   }

//   function createFighters(fighters) {
//     const fighterElements = fighters.map(fighter => createFighter(fighter));
//     const element = createElement({ tagName: 'div', className: 'fighters' });

  
//     element.append(...fighterElements);
//     return element;
//   }

//   function getFightersNames(fighters) {
//     return fighters.map(it => it.name).join('\n');
//   }

// const responsePromise = fetch(BASE_API_URL, SECURITY_HEADERS);
// responsePromise
// .then(response => {
//     if (!response.ok .ok ? response.json() : Promise.reject(Error('Failed to load'))) {
//       throw new Error('Failed load data');
//     }
//     return response.json();
//   })
//   .then(file => {
//     const fighters = JSON.parse(atob(file.content));
//     const names = fighters.map(it => it.name);
//     const namesStr = names.join('\n');
//     rootElement.innerText = namesStr;
//   })
// .catch(error => {
//     console.warn(error);
//     rootElement.innerText = 'Failed to load data';
//   })
//   .finally(() => {
//     loadingElement.remove();
//   });
