
import { Cmp7081Component } from './cmp';
describe('Cmp7081Component', () => {
  it('should add', () => {
    expect(new Cmp7081Component().add7081(1)).toBe(7082);
  });
});