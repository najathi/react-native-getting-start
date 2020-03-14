import React from 'react';

import { Text, View, StyleSheet, Touchable, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'

const GoalItem = props => (
	// <TouchableWithoutFeedback onPress={props.onDelete}>
	// <TouchableNativeFeedback onPress={props.onDelete}>
	// <TouchableHighlight onPress={props.onDelete}>
	<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
		{/* <Touchable> */}
		<View style={styles.listItem}>
			<Text>
				{props.title}
			</Text>
		</View>
		{/* </Touchable> */}
	</TouchableOpacity>
	//</TouchableHighlight>
	//</TouchableNativeFeedback>
	// </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 5,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});

export default GoalItem;