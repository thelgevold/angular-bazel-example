
import { Cmp2253Component } from './cmp';
describe('Cmp2253Component', () => {
  it('should add', () => {
    expect(new Cmp2253Component().add2253(1)).toBe(2254);
  });
});