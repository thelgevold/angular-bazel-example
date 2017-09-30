
import { Cmp9390Component } from './cmp';
describe('Cmp9390Component', () => {
  it('should add', () => {
    expect(new Cmp9390Component().add9390(1)).toBe(9391);
  });
});