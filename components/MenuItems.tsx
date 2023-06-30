import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
	' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
	return (
		<View style={menuStyles.container}>
			<ScrollView indicatorStyle='white'>
				<Text style={menuStyles.headingText}>View Menu</Text>
				<Text style={menuStyles.menuText}>
					{menuItemsToDisplay}
				</Text>
			</ScrollView>
		</View>
	);
};

const menuStyles = StyleSheet.create({
	container: {
		padding: 40,
		flex: 0.75,
	},
	headingText: {
		color: 'white',
		fontSize: 40,
	},
    menuText: {
        color: '#F4CE14',
        fontSize: 25,
    }
});

export default MenuItems;