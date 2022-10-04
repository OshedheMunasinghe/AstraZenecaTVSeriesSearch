import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {SeriesContext} from '../API/ContextAPI';

const SeriesText = () => {
    // const {showNames} = useContext(SeriesContext);
    return (
        <View>
            <Text style={{color: 'black', fontSize: 23, top: 100}}>Hello World</Text>
        </View>
    );
};

export default SeriesText;
