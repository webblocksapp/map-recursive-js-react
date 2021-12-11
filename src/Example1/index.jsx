import { mapRecursive } from './mapRecursive';

export const Example1 = () => {
  /**
   * Case 1:
   *
   * Using map recursive for doubling the numbers of an array.
   */
  const numbers = [2, 4, 6, 8, 10];

  //Using mapRecursive
  const doubledNumbers = mapRecursive(numbers, (number) => number * 2);
  console.log('original', numbers); //[2, 4, 6, 8, 10]
  console.log('mapped', doubledNumbers); //[4, 8, 12, 16, 20]

  //Using array map
  console.log('original', numbers); //[2, 4, 6, 8, 10]
  console.log(
    'mapped',
    numbers.map((number) => number * 2)
  ); //[4, 8, 12, 16, 20]

  /**
   * Case 2:
   *
   * Using map recursive for modifying an item from an array of objects.
   */
  const menuItems = [
    { id: 1, text: 'Menu 1', open: false },
    { id: 2, text: 'Menu 2', open: false },
  ];

  //Using mapRecursive
  const mappedMenuItems = mapRecursive(menuItems, (menuItem) => {
    if (menuItem.id === 2) {
      return { ...menuItem, open: true };
    }
    return menuItem;
  });
  console.log('original', menuItems); //[{...}, {id:2, text: 'Menu 2', open: false}]
  console.log('mapped', mappedMenuItems); //[{...}, {id:2, text: 'Menu 2', open: true}]

  //Using array map
  console.log('original', menuItems); //[{...}, {id:2, text: 'Menu 2', open: false}]
  console.log(
    'mapped',
    menuItems.map((menuItem) => {
      if (menuItem.id === 2) {
        return { ...menuItem, open: true };
      }
      return menuItem;
    })
  ); //[{...}, {id:2, text: 'Menu 2', open: true}]

  return <></>;
};
