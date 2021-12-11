import { mapRecursive } from './mapRecursive';
import { treeMenu } from './treeMenu';

export const Example3 = () => {
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

  /**
   * Case 2:
   *
   * Set all the open properties to true
   */
  console.log('original', treeMenu);
  console.log(
    'mapped',
    mapRecursive(treeMenu, (menu) => {
      return { ...menu, open: true };
    })
  );

  /**
   * Case 3:
   *
   * Set open to true only for the item with id 9
   */
  console.log('original', treeMenu);
  console.log(
    'mapped',
    mapRecursive(treeMenu, (menu) => {
      if (menu.id === 9) {
        return { ...menu, text: 'Text 9 affected', open: true };
      }

      return menu;
    })
  );

  return <></>;
};
