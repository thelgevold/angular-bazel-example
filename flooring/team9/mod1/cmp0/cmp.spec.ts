
import { Cmp5910Component } from './cmp';
describe('Cmp5910Component', () => {
  it('should add', () => {
    expect(new Cmp5910Component().add5910(1)).toBe(5911);
  });
});