import { View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
	return (
		<>
			<View
				style={{
					flex: 1,
					backgroundColor: '#495E57',
				}}
			>
				<Header />
                <MenuItems />
                {/* <WelcomeScreen /> */}
			</View>
		</>
	);
}
