
import { Cmp5831Component } from './cmp';
describe('Cmp5831Component', () => {
  it('should add', () => {
    expect(new Cmp5831Component().add5831(1)).toBe(5832);
  });
});