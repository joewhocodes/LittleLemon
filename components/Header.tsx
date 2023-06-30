import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
	return (
		<View style={headerStyles.container}>
			<Text style={headerStyles.headerText}>Little Lemon</Text>
		</View>
	);
}

const headerStyles = StyleSheet.create({
	container: {
		flex: 0.15,
		backgroundColor: '#F4CE14',
	},
	headerText: {
		padding: 40,
		fontSize: 30,
		color: 'black',
		textAlign: 'center',
	},
});
