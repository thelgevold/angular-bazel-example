
import { Cmp7032Component } from './cmp';
describe('Cmp7032Component', () => {
  it('should add', () => {
    expect(new Cmp7032Component().add7032(1)).toBe(7033);
  });
});