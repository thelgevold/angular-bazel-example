
import { Cmp2017Component } from './cmp';
describe('Cmp2017Component', () => {
  it('should add', () => {
    expect(new Cmp2017Component().add2017(1)).toBe(2018);
  });
});