
import { Cmp9306Component } from './cmp';
describe('Cmp9306Component', () => {
  it('should add', () => {
    expect(new Cmp9306Component().add9306(1)).toBe(9307);
  });
});