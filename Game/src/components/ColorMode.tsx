import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";


const ColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>Переключить на {colorMode === 'light' ? 'тёмный' : 'светлый'}</Text>
        </HStack>
    );
};

export default ColorMode;
