
import { Cmp2014Component } from './cmp';
describe('Cmp2014Component', () => {
  it('should add', () => {
    expect(new Cmp2014Component().add2014(1)).toBe(2015);
  });
});