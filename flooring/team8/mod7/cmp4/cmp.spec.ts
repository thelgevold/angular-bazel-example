
import { Cmp5874Component } from './cmp';
describe('Cmp5874Component', () => {
  it('should add', () => {
    expect(new Cmp5874Component().add5874(1)).toBe(5875);
  });
});