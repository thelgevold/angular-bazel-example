
import { Cmp5275Component } from './cmp';
describe('Cmp5275Component', () => {
  it('should add', () => {
    expect(new Cmp5275Component().add5275(1)).toBe(5276);
  });
});