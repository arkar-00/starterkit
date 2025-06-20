import {Text} from 'react-native';
import React from 'react';

const WelcomeText = ({username}: {username: string}) => {
  return <Text testID="welcome-text">{`Welcome, ${username}`}</Text>;
};

export default WelcomeText;
