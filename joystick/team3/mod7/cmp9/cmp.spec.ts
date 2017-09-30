
import { Cmp9379Component } from './cmp';
describe('Cmp9379Component', () => {
  it('should add', () => {
    expect(new Cmp9379Component().add9379(1)).toBe(9380);
  });
});