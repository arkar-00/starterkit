import {render, screen} from '@testing-library/react-native';
import WelcomeText from '../WelcomeText';

describe('WelcomeText', () => {
  test('WelcomeText renders with username', () => {
    const username = 'John Doe';
    render(<WelcomeText username={username} />);

    const welcomeText = screen.getByTestId('welcome-text');
    expect(welcomeText).toBeTruthy();
    expect(welcomeText.props.children).toBe(`Welcome, ${username}`);
  });

  test('WelcomeText handles empty username', () => {
    render(<WelcomeText username="" />);

    const welcomeText = screen.getByTestId('welcome-text');
    expect(welcomeText.props.children).toBe('Welcome, ');
  });

  test('WelcomeText handles username with special characters', () => {
    const username = 'John@Doe!';
    render(<WelcomeText username={username} />);

    const welcomeText = screen.getByTestId('welcome-text');
    expect(welcomeText.props.children).toBe(`Welcome, ${username}`);
  });

  test('WelcomeText handles long usernames', () => {
    const username = 'A very long username that exceeds normal length';
    render(<WelcomeText username={username} />);

    const welcomeText = screen.getByTestId('welcome-text');
    expect(welcomeText.props.children).toBe(`Welcome, ${username}`);
  });
});
