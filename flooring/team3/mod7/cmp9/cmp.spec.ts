
import { Cmp5379Component } from './cmp';
describe('Cmp5379Component', () => {
  it('should add', () => {
    expect(new Cmp5379Component().add5379(1)).toBe(5380);
  });
});