import React  from 'react';
import {Image, Text, View} from 'react-native';
import {SeriesImageWithTextCardStyles} from './seriesImageWithTextCard.styles';

const {sTitlle,sDescription,sContainer, imageContainer, siwtcContainer, imageStyle} = SeriesImageWithTextCardStyles

const SeriesText = ({serieTitle, descriptionText}) => {

    return (
        <View style={sContainer}>
            <Text style={sTitlle}>{serieTitle}</Text>
            <Text style={sDescription}>{descriptionText}</Text>
        </View>
    );
};


const SeriesImageWithTextCard = ({imageUrl}) => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

    return (
        <View style={siwtcContainer}>
            <View style={imageContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={imageStyle}/>
                </View>
            </View>
            <SeriesText serieTitle={'Show Title'} descriptionText={lorem}/>
        </View>
    );
};


export default SeriesImageWithTextCard;
