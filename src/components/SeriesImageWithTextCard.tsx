import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SeriesContext} from '../API/ContextAPI';


const SeriesText = ({serieTitle, descriptionText}) => {

    return (
        <View style={{marginTop: -120, left: 0, width: 280, bottom: 60}}>
            <Text style={{color: 'black', fontSize: 23}}>{serieTitle}</Text>
            <Text style={{color: 'black', fontSize: 14}}>{descriptionText}</Text>
        </View>
    );
};


const SeriesImageWithTextCard = ({imageUrl}) => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

    return (
        <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={{
                backgroundColor: '#FFFFEE',
                width: 300,
                height: 300,
                borderRadius: 8,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
            }}>
                <View>
                    <Image source={{uri: imageUrl}} style={{
                        width: 300,
                        height: 100,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                    }}/>
                </View>
            </View>
            <SeriesText serieTitle={'Show Title'} descriptionText={lorem}/>
            {/*<DescriptionText descriptionText={lorem}/>*/}
        </View>
    );
};


export default SeriesImageWithTextCard;
