
import { Cmp8379Component } from './cmp';
describe('Cmp8379Component', () => {
  it('should add', () => {
    expect(new Cmp8379Component().add8379(1)).toBe(8380);
  });
});