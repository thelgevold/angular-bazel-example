
import { Cmp7868Component } from './cmp';
describe('Cmp7868Component', () => {
  it('should add', () => {
    expect(new Cmp7868Component().add7868(1)).toBe(7869);
  });
});