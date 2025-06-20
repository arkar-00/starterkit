import {useState} from 'react';
import {Button, Text, View} from 'react-native';

const LikeButton = () => {
  const [likes, setLikes] = useState<number>(0);
  return (
    <View>
      <Text testID="count">{`Likes: ${likes}`}</Text>
      <Button title="Like" onPress={() => setLikes(likes + 1)} />
    </View>
  );
};

export default LikeButton;
