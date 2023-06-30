import { View, Text } from 'react-native';

export default function Header() {
	return (
		<View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
			<Text
				style={{
					padding: 40,
					fontSize: 30,
					color: 'black',
					textAlign: 'center',
				}}
				numberOfLines={3}
			>
				Welcome To
				<Text style={{ fontWeight: 'bold' }}> Little Lemon</Text>
			</Text>
		</View>
	);
}
