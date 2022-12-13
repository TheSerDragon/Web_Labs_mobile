import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';

export default function GameCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Game', { id: props.id_game });
    };

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: `http://172.20.10.5:8000/media/${props.game_image}` }}
                resizeMode='contain'
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{props.game_name}</Text>
                <Text style={styles.text}>Стоимость: {props.price} р.</Text>
            </View>
            <Button title='View details' onPress={handlePress} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#ddd',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
    brandTitle: { color: '#4287f5', fontSize: 16 },
    text: { color: '#000', fontSize: 16 },
});