
import { Cmp5303Component } from './cmp';
describe('Cmp5303Component', () => {
  it('should add', () => {
    expect(new Cmp5303Component().add5303(1)).toBe(5304);
  });
});