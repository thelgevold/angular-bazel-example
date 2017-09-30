
import { Cmp5111Component } from './cmp';
describe('Cmp5111Component', () => {
  it('should add', () => {
    expect(new Cmp5111Component().add5111(1)).toBe(5112);
  });
});