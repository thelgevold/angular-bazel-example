
import { Cmp2100Component } from './cmp';
describe('Cmp2100Component', () => {
  it('should add', () => {
    expect(new Cmp2100Component().add2100(1)).toBe(2101);
  });
});