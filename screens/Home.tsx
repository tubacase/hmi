import * as React from 'react';
import { StyleSheet } from 'react-native';

import InsulinRecommendation from '../components/InsulinRecommendation';
import { Text, View } from '../components/Themed';
import NumericalInput from '../components/NumericalInput';

const STRINGS = require('../assets/strings.js').strings;

export default function Home() {
	const [bg, setBG] = React.useState("100");
	const [carbs, setCarbs] = React.useState("0");

  return (
    <View style={styles.container}>
			<View style={styles.input_container}>
				<Text style={styles.title}>{STRINGS.bg}</Text>
				<NumericalInput
					placeholder="100"
					onChangeText={text => setBG(text)}
					defaultValue={bg}
					maxLength={3}
					autoFocus={true}
				/>
			</View>
			<View style={styles.input_container}>
				<Text style={styles.title}>{STRINGS.carbs}</Text>
				<NumericalInput
					placeholder="0"
					onChangeText={text => setCarbs(text)}
					defaultValue={carbs}
					maxLength={5}
				/>
			</View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <InsulinRecommendation bg={bg} carbs={carbs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
	input_container: {
		width: '50%',
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		minHeight: 0,
		marginTop: 5,
	},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
