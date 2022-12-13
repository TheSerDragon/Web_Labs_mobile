import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetGame, setGame } from '../store/gameSlice';
import { axiosInstance } from '../api';

export default function GameScreen({ route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { game } = useSelector((store) => store.game);
    useEffect(() => {
        async function getOneGame() {
            await axiosInstance.get(`games/${id}`).then((response) => dispatch(setGame(response?.data)));
        }
        getOneGame();
        return () => {
            dispatch(resetGame());
        };
    }, [dispatch]);
    return (
        <View>
            <Image
                style={styles.image}
                source={{ uri: `http://172.20.10.5:8000/media/${game.game_image}` }}
                resizeMode='contain'
            />
            <Text>{game.game_name}</Text>
            <Text>{game.date_release}</Text>
            <Text>{game.description}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    image: { height: 320, alignSelf: 'stretch' }
});