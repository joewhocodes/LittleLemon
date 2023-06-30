import * as React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
	return (
		<ScrollView indicatorStyle='white' style={{ flex: 1 }}>
			<Text style={welcomeStyles.welcomeHeader}>
				Welcome to Little Lemon
			</Text>
			<Text style={welcomeStyles.welcomeText}>
				Little Lemon is a charming neighborhood bistro that serves
				simple food and classic cocktails in a lively but casual
				environment. We would love to hear your experience with us!
			</Text>
		</ScrollView>
	);
}

const welcomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EDEFEE',
		alignItems: 'center',
		justifyContent: 'center',
	},
	welcomeHeader: {
		padding: 40,
		fontSize: 50,
		color: '#EDEFEE',
		textAlign: 'center',
	},
	welcomeText: {
		fontSize: 44,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center',
	},
});
