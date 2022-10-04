import {StyleSheet} from 'react-native';

export const SeriesImageWithTextCardStyles = StyleSheet.create({
//    * SERIES TEXT COMPONENT
    sContainer: {
        marginTop: -120,
        left: 0,
        width: 280,
        bottom: 60,
    },
    sTitlle: {
        color: 'black',
        fontSize: 23,
    },
    sDescription: {
        color: 'black',
        fontSize: 14,
    },

//    * SERIES IMAGE WITH TEXT CARD COMPONENT
    siwtcContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    imageContainer: {
        backgroundColor: '#f5f1f1',
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
    },
    imageStyle: {
        width: 300,
        height: 100,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
});
