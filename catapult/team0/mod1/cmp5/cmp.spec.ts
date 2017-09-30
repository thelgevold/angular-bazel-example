
import { Cmp2015Component } from './cmp';
describe('Cmp2015Component', () => {
  it('should add', () => {
    expect(new Cmp2015Component().add2015(1)).toBe(2016);
  });
});