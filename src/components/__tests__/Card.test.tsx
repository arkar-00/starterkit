import {render} from '@testing-library/react-native';
import Card from '../Card';

describe('Card', () => {
  const mockTitle = 'Test Title';
  const mockContent = 'This is a test content for the card component.';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Card with title and content', () => {
    const {getByText} = render(<Card title={mockTitle} content={mockContent} />);

    expect(getByText(mockTitle)).toBeTruthy();
    expect(getByText(mockContent)).toBeTruthy();
  });

  test('should render correctly and match snapshot', () => {
    // Render the Card component with sample title and content
    const {toJSON} = render(
      <Card title="Test Title" content="This is the test content for the card." />,
    );

    // Get the JSON tree from the rendered component
    const tree = toJSON();

    // Expect the component's rendered tree to match the most recent snapshot.
    // If no snapshot exists, one will be created. If it differs, the test fails.
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with different content and match snapshot', () => {
    const {toJSON} = render(
      <Card
        title="Another Card Example"
        content="This card contains different content to ensure the snapshot testing captures variations. It might be longer."
      />,
    );
    const tree = toJSON();
    expect(tree).toMatchSnapshot();
  });
});
