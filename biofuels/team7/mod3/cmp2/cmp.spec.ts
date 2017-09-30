
import { Cmp1732Component } from './cmp';
describe('Cmp1732Component', () => {
  it('should add', () => {
    expect(new Cmp1732Component().add1732(1)).toBe(1733);
  });
});