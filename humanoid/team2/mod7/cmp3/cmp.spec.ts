
import { Cmp7273Component } from './cmp';
describe('Cmp7273Component', () => {
  it('should add', () => {
    expect(new Cmp7273Component().add7273(1)).toBe(7274);
  });
});