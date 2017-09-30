
import { Cmp2032Component } from './cmp';
describe('Cmp2032Component', () => {
  it('should add', () => {
    expect(new Cmp2032Component().add2032(1)).toBe(2033);
  });
});