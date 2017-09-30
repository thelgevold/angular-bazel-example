
import { Cmp2163Component } from './cmp';
describe('Cmp2163Component', () => {
  it('should add', () => {
    expect(new Cmp2163Component().add2163(1)).toBe(2164);
  });
});