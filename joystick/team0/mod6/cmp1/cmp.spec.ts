
import { Cmp9061Component } from './cmp';
describe('Cmp9061Component', () => {
  it('should add', () => {
    expect(new Cmp9061Component().add9061(1)).toBe(9062);
  });
});