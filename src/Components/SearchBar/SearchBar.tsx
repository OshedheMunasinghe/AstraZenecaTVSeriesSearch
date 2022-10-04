import React from 'react';
import {TextInput, View} from 'react-native';
import {SearchbarStyles} from './searchbar.styles';

const {textContainer} = SearchbarStyles;
const SearchBar = () => {
    return (
        <View>
            <TextInput placeholder={'Search...'} placeholderTextColor={'black'} style={textContainer}
                       cursorColor={'black'}/>
        </View>
    );
};

export default SearchBar;
