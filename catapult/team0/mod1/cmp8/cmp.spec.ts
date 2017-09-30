
import { Cmp2018Component } from './cmp';
describe('Cmp2018Component', () => {
  it('should add', () => {
    expect(new Cmp2018Component().add2018(1)).toBe(2019);
  });
});