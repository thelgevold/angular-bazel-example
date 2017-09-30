
import { Cmp7639Component } from './cmp';
describe('Cmp7639Component', () => {
  it('should add', () => {
    expect(new Cmp7639Component().add7639(1)).toBe(7640);
  });
});