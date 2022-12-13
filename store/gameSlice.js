import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    games: [],
    game: {},
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGames: (state, { payload }) => {
            console.log('setGames');
            state.games = payload;
        },
        setGame: (state, { payload }) => {
            console.log('setGame');
            state.game = payload;
        },
        resetGame: (state) => {
            console.log('resetGame');
            state.game = {};
        },
    },
});

export const gameReducer = gameSlice.reducer;

export const { setGames, setGame, resetGame } = gameSlice.actions;