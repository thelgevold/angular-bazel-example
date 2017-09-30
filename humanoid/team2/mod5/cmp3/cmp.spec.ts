
import { Cmp7253Component } from './cmp';
describe('Cmp7253Component', () => {
  it('should add', () => {
    expect(new Cmp7253Component().add7253(1)).toBe(7254);
  });
});