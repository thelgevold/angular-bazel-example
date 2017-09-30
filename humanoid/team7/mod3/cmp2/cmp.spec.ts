
import { Cmp7732Component } from './cmp';
describe('Cmp7732Component', () => {
  it('should add', () => {
    expect(new Cmp7732Component().add7732(1)).toBe(7733);
  });
});