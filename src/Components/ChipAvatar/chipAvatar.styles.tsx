import {StyleSheet} from 'react-native';

const size = 27;
export const ChipAvatarStyles = StyleSheet.create({
    chipContainer: {
        width: 130,
        height: 27,
        backgroundColor: '#CBC3E3',
        borderRadius: 18,
        marginTop: 4,
    },
    imageContainer: {
        width: size,
        height: size,
        borderRadius: size / 2,
        opacity: 0.8,
    },
    textContainer: {
        color: 'black',
        bottom: 24,
        left: 35,
        opacity: 0.8,
    },
    chipBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});
