
import { Cmp5061Component } from './cmp';
describe('Cmp5061Component', () => {
  it('should add', () => {
    expect(new Cmp5061Component().add5061(1)).toBe(5062);
  });
});