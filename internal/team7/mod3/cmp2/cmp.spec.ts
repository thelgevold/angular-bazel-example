
import { Cmp8732Component } from './cmp';
describe('Cmp8732Component', () => {
  it('should add', () => {
    expect(new Cmp8732Component().add8732(1)).toBe(8733);
  });
});