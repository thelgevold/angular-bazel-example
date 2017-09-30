
import { Cmp2016Component } from './cmp';
describe('Cmp2016Component', () => {
  it('should add', () => {
    expect(new Cmp2016Component().add2016(1)).toBe(2017);
  });
});