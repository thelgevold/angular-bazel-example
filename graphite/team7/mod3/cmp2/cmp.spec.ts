
import { Cmp6732Component } from './cmp';
describe('Cmp6732Component', () => {
  it('should add', () => {
    expect(new Cmp6732Component().add6732(1)).toBe(6733);
  });
});