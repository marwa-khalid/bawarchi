import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const SignInScreen = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <View>
      <Text>Sign In As:</Text>
      <View>
        <RadioButton.Group onValueChange={handleOptionChange} value={selectedOption}>
          <View>
            <Text>Chef</Text>
            <RadioButton value="chef" />
          </View>
          <View>
            <Text>Customer</Text>
            <RadioButton value="customer" />
          </View>
          <View>
            <Text>Rider</Text>
            <RadioButton value="rider" />
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default SignInScreen;
