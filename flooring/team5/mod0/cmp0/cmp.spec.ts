
import { Cmp5500Component } from './cmp';
describe('Cmp5500Component', () => {
  it('should add', () => {
    expect(new Cmp5500Component().add5500(1)).toBe(5501);
  });
});