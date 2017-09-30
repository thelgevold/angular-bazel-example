
import { Cmp2122Component } from './cmp';
describe('Cmp2122Component', () => {
  it('should add', () => {
    expect(new Cmp2122Component().add2122(1)).toBe(2123);
  });
});