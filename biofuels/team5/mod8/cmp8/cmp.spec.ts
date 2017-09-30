
import { Cmp1588Component } from './cmp';
describe('Cmp1588Component', () => {
  it('should add', () => {
    expect(new Cmp1588Component().add1588(1)).toBe(1589);
  });
});