import React from 'react';
import {View, Text, TextInput} from 'react-native';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {HomeStyles} from './home.styles';

const {homeContainer} = HomeStyles;

const HomeScreen = () => {

    return (
        <View style={homeContainer}>
            <SearchBar/>
        </View>
    );
};

export default HomeScreen;
