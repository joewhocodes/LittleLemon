import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
	return (
		<View style={footerStyles.container}>
			<Text style={footerStyles.footerText}>
				All rights reserved by Little Lemon, 2023{' '}
			</Text>
		</View>
	);
}

const footerStyles = StyleSheet.create({
	container: {
		flex: 0.15,
		backgroundColor: '#F4CE14',
	},
	footerText: {
        padding: 10,
		fontSize: 15,
		color: 'black',
		textAlign: 'center',
        paddingTop: 30,
	},
});
