
import { Cmp7410Component } from './cmp';
describe('Cmp7410Component', () => {
  it('should add', () => {
    expect(new Cmp7410Component().add7410(1)).toBe(7411);
  });
});