
import { Cmp7414Component } from './cmp';
describe('Cmp7414Component', () => {
  it('should add', () => {
    expect(new Cmp7414Component().add7414(1)).toBe(7415);
  });
});