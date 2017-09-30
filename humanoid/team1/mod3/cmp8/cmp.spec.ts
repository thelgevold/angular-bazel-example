
import { Cmp7138Component } from './cmp';
describe('Cmp7138Component', () => {
  it('should add', () => {
    expect(new Cmp7138Component().add7138(1)).toBe(7139);
  });
});