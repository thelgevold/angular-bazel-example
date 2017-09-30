
import { Cmp9732Component } from './cmp';
describe('Cmp9732Component', () => {
  it('should add', () => {
    expect(new Cmp9732Component().add9732(1)).toBe(9733);
  });
});