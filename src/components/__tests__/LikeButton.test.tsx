import {render, screen, fireEvent} from '@testing-library/react-native';
import LikeButton from '../LikeButton';

describe('LikeButton', () => {
  const getCountText = () => screen.getByTestId('count');
  const getLikeButton = () => screen.getByText('Like');

  test('renders LikeButton with initial likes count', () => {
    render(<LikeButton />);
    expect(getCountText()).toBeTruthy();
    expect(getCountText().props.children).toBe('Likes: 0');
  });

  test('increments likes count when button is pressed', () => {
    render(<LikeButton />);
    fireEvent.press(getLikeButton());
    expect(getCountText().props.children).toBe('Likes: 1');
  });

  test('increments likes count multiple times when button is pressed repeatedly', () => {
    render(<LikeButton />);
    const button = getLikeButton();
    fireEvent.press(button);
    fireEvent.press(button);
    fireEvent.press(button);

    expect(getCountText().props.children).toBe('Likes: 3');
  });
});
