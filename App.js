import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import GameScreen from './screens/GameScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Shop' component={ShopScreen} />
                    <Stack.Screen name='Game' component={GameScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


