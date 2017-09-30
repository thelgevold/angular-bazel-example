
import { Cmp2584Component } from './cmp';
describe('Cmp2584Component', () => {
  it('should add', () => {
    expect(new Cmp2584Component().add2584(1)).toBe(2585);
  });
});