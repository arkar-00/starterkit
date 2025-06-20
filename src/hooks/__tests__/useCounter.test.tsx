// Import renderHook and act from @testing-library/react-hooks
import {renderHook, act} from '@testing-library/react-hooks';
import useCounter from '../useCounter';
// Import your custom hook

describe('useCounter', () => {
  /**
   * Test Case 1: Initial state
   * Verifies that the 'count' state is initialized to 0.
   */
  test('should initialize count to 0', () => {
    // renderHook is used to test custom hooks. It returns an object
    // with `result` which holds the current value returned by the hook.
    const {result} = renderHook(() => useCounter());

    // Assert that the initial count value is 0.
    expect(result.current.count).toBe(0);
  });

  /**
   * Test Case 2: Increment functionality
   * Verifies that the 'increment' function correctly increases the count.
   */
  test('should increment the count', () => {
    const {result} = renderHook(() => useCounter());

    // The `act` function ensures that any state updates or effects
    // triggered by the function call (like `increment()`) are processed
    // before making assertions. This mimics how React batches updates.
    act(() => {
      result.current.increment(); // Call the increment function
    });

    // After calling increment, assert that the count has increased to 1.
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.increment(); // Call increment again
    });

    // Assert that the count has further increased to 2.
    expect(result.current.count).toBe(2);
  });

  /**
   * Test Case 3: Multiple increments
   * Confirms that incrementing multiple times works as expected.
   */
  test('should increment the count multiple times', () => {
    const {result} = renderHook(() => useCounter());

    act(() => {
      result.current.increment(); // 1st increment
    });
    expect(result.current.count).toBe(1);

    act(() => {
      result.current.increment(); // 2nd increment
    });
    expect(result.current.count).toBe(2);

    act(() => {
      result.current.increment(); // 3rd increment
    });
    expect(result.current.count).toBe(3);
  });

  /**
   * Test Case 4: Ensuring `increment` is stable (referential equality)
   * This is important for useCallback. It verifies that the `increment` function
   * itself doesn't change on re-renders, preventing unnecessary re-renders of
   * child components that depend on it.
   */
  test('should return a stable increment function', () => {
    const {result, rerender} = renderHook(() => useCounter());

    const initialIncrement = result.current.increment;

    // Rerender the hook (simulates parent component re-rendering)
    rerender();

    // The increment function should be the same instance as before,
    // due to useCallback.
    expect(result.current.increment).toBe(initialIncrement);
  });
});
