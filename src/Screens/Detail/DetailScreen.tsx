import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import {SeriesContext} from '../../API/ContextAPI';
import SeriesImageWithTextCard from '../../Components/SeriesImageTextCard/SeriesImageWithTextCard';


const DetailScreen = () => {
    const {smallImage} = useContext(SeriesContext);

    // ! Fel key unique keys
    return (
        <ScrollView>
            {smallImage.map((i) => <SeriesImageWithTextCard imageUrl={i}/>)}
        </ScrollView>
    );
};

export default DetailScreen;
