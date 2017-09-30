
import { Cmp5595Component } from './cmp';
describe('Cmp5595Component', () => {
  it('should add', () => {
    expect(new Cmp5595Component().add5595(1)).toBe(5596);
  });
});