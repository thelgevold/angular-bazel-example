
import { Cmp9613Component } from './cmp';
describe('Cmp9613Component', () => {
  it('should add', () => {
    expect(new Cmp9613Component().add9613(1)).toBe(9614);
  });
});