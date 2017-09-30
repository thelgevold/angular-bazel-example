
import { Cmp5835Component } from './cmp';
describe('Cmp5835Component', () => {
  it('should add', () => {
    expect(new Cmp5835Component().add5835(1)).toBe(5836);
  });
});