
import { Cmp7258Component } from './cmp';
describe('Cmp7258Component', () => {
  it('should add', () => {
    expect(new Cmp7258Component().add7258(1)).toBe(7259);
  });
});