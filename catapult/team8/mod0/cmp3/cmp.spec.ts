
import { Cmp2803Component } from './cmp';
describe('Cmp2803Component', () => {
  it('should add', () => {
    expect(new Cmp2803Component().add2803(1)).toBe(2804);
  });
});