
import { Cmp7821Component } from './cmp';
describe('Cmp7821Component', () => {
  it('should add', () => {
    expect(new Cmp7821Component().add7821(1)).toBe(7822);
  });
});