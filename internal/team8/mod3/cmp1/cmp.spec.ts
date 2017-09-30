
import { Cmp8831Component } from './cmp';
describe('Cmp8831Component', () => {
  it('should add', () => {
    expect(new Cmp8831Component().add8831(1)).toBe(8832);
  });
});