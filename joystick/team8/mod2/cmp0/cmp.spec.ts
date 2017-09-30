
import { Cmp9820Component } from './cmp';
describe('Cmp9820Component', () => {
  it('should add', () => {
    expect(new Cmp9820Component().add9820(1)).toBe(9821);
  });
});