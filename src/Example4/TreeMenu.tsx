import React, { useEffect, useState } from 'react';
import {
  List,
  ListProps,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import { mapRecursive } from './mapRecursive';
import { TreeMenu as TreeMenuType } from '../app-types';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface TreeMenuProps extends ListProps {
  menu: TreeMenuType[];
  level?: number;
}

export const TreeMenu: React.FC<TreeMenuProps> = ({
  level = 1,
  menu: menuProp,
  ...props
}) => {
  const [menu, setMenu] = useState<TreeMenuType[]>(menuProp || []);
  const [paddingLeft, setPaddingLeft] = useState<number>();

  const open = (id: number) => () => {
    setMenu((prevMenu) =>
      mapRecursive(prevMenu, (item) => {
        if (item.id === id) {
          item.open = !item.open;
        }
        return item;
      })
    );
  };

  useEffect(() => {
    if (level) {
      setPaddingLeft(1 + level);
    }
  }, [level]);

  return (
    <List {...props}>
      {menu.map((item, index) => (
        <>
          <ListItemButton
            key={`${index}-${item.id}`}
            sx={{ paddingLeft }}
            onClick={open(item.id)}
          >
            <ListItemText primary={item.text} />
            {item.children &&
              (item.open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
          </ListItemButton>
          {item.children && (
            <Collapse in={item.open} timeout="auto" unmountOnExit>
              <TreeMenu menu={item.children} level={level + 1} disablePadding />
            </Collapse>
          )}
        </>
      ))}
    </List>
  );
};
