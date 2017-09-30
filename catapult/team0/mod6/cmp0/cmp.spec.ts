
import { Cmp2060Component } from './cmp';
describe('Cmp2060Component', () => {
  it('should add', () => {
    expect(new Cmp2060Component().add2060(1)).toBe(2061);
  });
});