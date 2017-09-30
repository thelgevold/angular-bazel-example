
import { Cmp2298Component } from './cmp';
describe('Cmp2298Component', () => {
  it('should add', () => {
    expect(new Cmp2298Component().add2298(1)).toBe(2299);
  });
});