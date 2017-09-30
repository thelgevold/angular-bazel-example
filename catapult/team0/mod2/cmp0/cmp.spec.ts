
import { Cmp2020Component } from './cmp';
describe('Cmp2020Component', () => {
  it('should add', () => {
    expect(new Cmp2020Component().add2020(1)).toBe(2021);
  });
});