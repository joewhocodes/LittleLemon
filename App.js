import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
	return (
		<>
			<View style={appStyles.container}>
				<Header />
				<MenuItems />
				{/* <WelcomeScreen /> */}
				<Footer />
			</View>
		</>
	);
}

const appStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#495E57',
	},
});
