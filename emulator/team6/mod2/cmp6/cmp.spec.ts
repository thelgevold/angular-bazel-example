
import { Cmp4626Component } from './cmp';
describe('Cmp4626Component', () => {
  it('should add', () => {
    expect(new Cmp4626Component().add4626(1)).toBe(4627);
  });
});