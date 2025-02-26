/**
 * loads and decorates the hero
 * @param {Element} block The hero block element
 */

export default async function decorate(block) {
  // Target the third child div to add button-primary class
  const div = block.children[2];

  if (div) {
    const btnContainer = div.querySelector('.button-container');
    btnContainer.querySelector('a').classList.add('button-primary');
  }

  if(block.classList.contains('coverage')) {
    console.log(block)
    const description = block.querySelector('.block > div:nth-last-child(1)');
    const h1 = block.querySelector('.block > div:nth-last-child(2)');
    if(description && h1) h1.appendChild(description.querySelector('div'));
  }
}
