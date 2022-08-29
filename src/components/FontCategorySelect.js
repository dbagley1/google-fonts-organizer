import { useEffect, useState } from "react";

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import ChevronDownIcon from './ChevronDownIcon';

function FontCategorySelect(props) {
  const { options, label } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <>
      <Menu closeOnSelect={false}>
        {({ onClose }) => (
          <>
            <MenuButton
              as={Button}
              backgroundColor={selectedOptions.length ? "purple.200" : "white"}
              color={selectedOptions.length ? "purple.500" : "gray.600"}
              borderColor={selectedOptions.length ? "purple.200" : "gray.300"}
              borderWidth={1}
              p={2}
              px={4}
              borderRadius="25px"
              _focus={{
                outline: "none"
              }}
              rightIcon={<ChevronDownIcon />}
            >
              {`${label}${selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ""
                }`}
            </MenuButton>
            <MenuList>
              <MenuGroup title={undefined}>
                <MenuItem
                  onClick={() => {
                    setSelectedOptions([]);
                    // Have to close, otherwise the defaultValue won't be reset correctly
                    // and so the UI won't immediately show the menu item options unselected.
                    onClose();
                  }}
                >
                  Clear all
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuOptionGroup
                title={undefined}
                defaultValue={selectedOptions}
                type="checkbox"
                onChange={(value) => {
                  // Filter out empty strings, because, well, this component seems to add
                  // an empty string out of nowhere.
                  console.log(value);
                  setSelectedOptions(value);
                  props.onChange?.(value);
                }}
              >
                {options.map((option) => {
                  return (
                    // Use 'type'='button' to make sure it doesn't default to 'type'='submit'.
                    <MenuItemOption
                      key={`multiselect-menu-${option}`}
                      // type="checkbox"
                      type="button"
                      value={option}
                    >
                      {option}
                    </MenuItemOption>
                  );
                })}
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
      {/* {JSON.stringify(selectedOptions)} */}
      {/* <div>
      FontCategorySelect
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>
            <checkbox value="All">All</checkbox>
          </MenuItem>
          <MenuItem>
            <checkbox value="Serif">Serif</checkbox>
          </MenuItem>
          <MenuItem>
            <checkbox value="Sans Serif">Sans-serif</checkbox>
          </MenuItem>
          <MenuItem>
            <checkbox value="Display">Display</checkbox>
          </MenuItem>
          <MenuItem>
            <checkbox value="Handwritten">Handwritten</checkbox>
          </MenuItem>
          <MenuItem>
            <checkbox value="Monospace">Monospace</checkbox>
          </MenuItem>
        </MenuList>
      </Menu>
    </div> */}
    </>
  );
}

export default FontCategorySelect;
