import View from "./view";
import FighterView from "./fighterView";

class FightersView extends View {
  fightersDetailsMap = new Map();

  constructor(fighters) {
    super();

    this.createFighters(fighters);
    this.handleClick = this.handleFighterClick.bind(this);
  }

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {

      // Class function with context
      const fighterView = new FighterView(fighter, this.handleClick);

      return fighterView.element;
    });

    // ..

    this.element = this.createElement({ tagName: 'div', className: 'fighters' });
    this.element.append(...fighterElements);
  }

  handleFighterClick(event, fighter) {
    this.fightersDetailsMap.set(fighter._id, fighter);
    console.log('clicked')

  }
}

export default FightersView;