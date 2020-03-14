import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = enterText => {
		setEnteredGoal(enterText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					value={enteredGoal}
					onChangeText={goalInputHandler} />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="CANCEL"
							onPress={props.cancel}
							color="red" />
					</View>
					<View style={styles.button}>
						<Button
							title="ADD"
							onPress={addGoalHandler}
						//onPress={() => props.onAddGoal(enteredGoal)}
						//onPress={props.onAddGoal.bind(this, enteredGoal)}
						/>
					</View>

				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		marginBottom: 10,
		padding: 10,
		borderColor: 'black',
		borderWidth: 1
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%'
	},
	button: {
		width: '40%'
	}
});

export default GoalInput;