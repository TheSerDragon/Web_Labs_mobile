import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { setGames } from '../store/gameSlice';
import GameCard from '../components/GameCard';

export default function ShopScreen({ navigation }) {
    const dispatch = useDispatch();
    const { games } = useSelector((store) => store.game);

    useEffect(() => {
        async function getAllGames() {
            await axiosInstance.get('games/').then((response) => dispatch(setGames(response?.data)));
        }
        getAllGames();
    }, [dispatch]);

    return (
        <ScrollView>
            <View style={styles.page}>
                {!!games &&
                    games.map((game) => <GameCard key={game.id_game} {...game} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});