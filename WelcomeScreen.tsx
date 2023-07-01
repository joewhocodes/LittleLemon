import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
    Alert,
} from 'react-native';

const FeedbackForm = () => {
	// declare the variables
	const [email, onChangeEmail] = useState('');
	const [password, onChangePassword] = useState('');
	const [message, onChangeMessage] = useState('');

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<ScrollView keyboardDismissMode='on-drag'>
				<Text style={styles.headingSection}>
					Welcome to Little Lemon
				</Text>
				<Text style={styles.infoSection}>Please Login</Text>
				<TextInput
					style={styles.input}
					value={email}
                    placeholder='email'
					onChangeText={onChangeEmail}
                    clearButtonMode={'always'} 
				/>
				<TextInput
					style={styles.input}
					value={password}
                    secureTextEntry={true}
					onChangeText={onChangePassword}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
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
		backgroundColor: 'white',
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
	},
	headingSection: {
		fontSize: 28,
		padding: 20,
		marginVertical: 8,
		color: '#EDEFEE',
		textAlign: 'center',
	},
});

export default FeedbackForm;
