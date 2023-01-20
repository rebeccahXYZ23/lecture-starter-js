class View {
    element;
  
    createElement({ tagName, className = '', attributes = {} }) {
      const element = document.createElement(tagName);
      element.classList.add(className);
      
      Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
  
      return element;
    }
  
  get element() {
    return this.element;
  }
  
  set element(value) {
    this.element = value;
  }
}

export default View;