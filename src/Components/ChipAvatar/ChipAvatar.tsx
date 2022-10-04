import React from 'react';
import {Image, Text, View} from 'react-native';
import {ChipAvatarStyles} from './chipAvatar.styles';

const {imageContainer, textContainer, chipContainer} = ChipAvatarStyles;
const ChipAvatar = () => {
    return (
        <View style={chipContainer}>
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                   style={imageContainer}/>
            <Text style={textContainer}>Artist Name</Text>
        </View>
    );
};

export default ChipAvatar;
