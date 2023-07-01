import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const FeedbackForm = () => {
	const [firstName, onChangeFirstName] = useState('');
	const [lastName, onChangeLastName] = useState('');
	const [message, onChangeMessage] = useState('');
	const [phoneNumber, onChangePhoneNumber] = useState('');

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.headingSection}>Login</Text>
			<Text style={styles.infoSection}>
                Please enter your login information
			</Text>
			<TextInput
				style={styles.input}
				value={firstName}
				onChangeText={onChangeFirstName}
			/>
			<TextInput
				style={styles.input}
				value={lastName}
				onChangeText={onChangeLastName}
			/>
			<TextInput
				style={styles.messageInput}
				value={message}
				onChangeText={onChangeMessage}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 16,
		// borderColor: 'EDEFEE',
		backgroundColor: '#F4CE14',
	},
	messageInput: {
		height: 100,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		fontSize: 16,
		backgroundColor: '#F4CE14',
	},
	infoSection: {
		fontSize: 24,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center',
		backgroundColor: '#495E57',
	},
	headingSection: {
		fontSize: 28,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center',
		backgroundColor: '#495E57',
	},
});

export default FeedbackForm;
