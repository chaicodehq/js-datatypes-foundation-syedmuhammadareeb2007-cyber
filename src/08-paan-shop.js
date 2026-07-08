/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Object.assign({}, basePaan, customizations) se NEW order object banao
 *      - Original basePaan ko mutate MAT karo!
 *      - Agar basePaan object nahi hai ya null hai, return {}
 *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
 *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"meetha", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Object.freeze() se menu ko immutable banao
 *      - Return: frozen object
 *      - Agar menu object nahi hai ya null hai, return {}
 *      - Frozen ke baad koi modification kaam nahi karegi!
 *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Object.entries() se [key, value] pairs lo
 *      - Har price mein increase add karo
 *      - Object.fromEntries() se wapas object banao
 *      - Return: NEW object (original mat badlo!)
 *      - Agar menu object nahi hai ya increase number nahi hai, return {}
 *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
 *      - specialsMenu ki values override karengi agar same key ho
 *      - Return: NEW merged object
 *      - Agar koi bhi object nahi hai, usse empty {} maan lo
 *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
 *                 => {meetha:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */
export function createPaanOrder(basePaan, customizations) {
  // Your code here
//   1. createPaanOrder(basePaan, customizations)
//  *      - Object.assign({}, basePaan, customizations) se NEW order object banao
//  *      - Original basePaan ko mutate MAT karo!
//  *      - Agar basePaan object nahi hai ya null hai, return {}
//  *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
//  *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
//  *                 => {type:"meetha", price:50, extra:"gulkand"}
  if( typeof basePaan !== "object" || basePaan === null || customizations === null || Array.isArray(customizations)) return {};
  if(typeof customizations !== "object" || customizations === null || Array.isArray(customizations)) return Object.assign({},basePaan);
  const result = Object.assign({}, basePaan, customizations);
  return result;
}

export function freezeMenu(menu) {
//   // Your code here
//   2. freezeMenu(menu)
//  *      - Object.freeze() se menu ko immutable banao
//  *      - Return: frozen object
//  *      - Agar menu object nahi hai ya null hai, return {}
//  *      - Frozen ke baad koi modification kaam nahi karegi!
//  *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
  if( typeof menu !== "object" || menu === null || Array.isArray(menu)) return {};
  Object.freeze(menu);
  return menu;
}

export function updatePrices(menu, increase) {
  // Your code here
//   3. updatePrices(menu, increase)
//  *      - Object.entries() se [key, value] pairs lo
//  *      - Har price mein increase add karo
//  *      - Object.fromEntries() se wapas object banao
//  *      - Return: NEW object (original mat badlo!)
//  *      - Agar menu object nahi hai ya increase number nahi hai, return {}
//  *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
  if( typeof menu !== "object" || menu === null || Array.isArray(menu) || typeof increase !== "number") return {};
  const entries = Object.entries(menu);
  const updatedEntries = entries.map(([item, price]) => {
  return [item, price+increase];
});

const originalObj = Object.fromEntries(updatedEntries);
return originalObj;
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  // Your code here
//    4. mergeDailySpecials(regularMenu, specialsMenu)
//  *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
//  *      - specialsMenu ki values override karengi agar same key ho
//  *      - Return: NEW merged object
//  *      - Agar koi bhi object nahi hai, usse empty {} maan lo
//  *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
//  *                 => {meetha:40, chocolate:60}
// 1. Normalize regularMenu: if it's invalid, treat it as {}
  const cleanRegular = (typeof regularMenu !== "object" || regularMenu === null || Array.isArray(regularMenu)) 
    ? {} 
    : regularMenu;

  // 2. Normalize specialsMenu: if it's invalid, treat it as {}
  const cleanSpecials = (typeof specialsMenu !== "object" || specialsMenu === null || Array.isArray(specialsMenu)) 
    ? {} 
    : specialsMenu;

  // 3. Merge them. cleanSpecials will automatically override cleanRegular keys!
  return { ...cleanRegular, ...cleanSpecials };
}
