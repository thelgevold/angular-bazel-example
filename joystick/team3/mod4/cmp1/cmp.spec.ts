
import { Cmp9341Component } from './cmp';
describe('Cmp9341Component', () => {
  it('should add', () => {
    expect(new Cmp9341Component().add9341(1)).toBe(9342);
  });
});