
import { Cmp5290Component } from './cmp';
describe('Cmp5290Component', () => {
  it('should add', () => {
    expect(new Cmp5290Component().add5290(1)).toBe(5291);
  });
});