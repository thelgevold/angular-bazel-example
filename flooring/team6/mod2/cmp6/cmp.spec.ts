
import { Cmp5626Component } from './cmp';
describe('Cmp5626Component', () => {
  it('should add', () => {
    expect(new Cmp5626Component().add5626(1)).toBe(5627);
  });
});