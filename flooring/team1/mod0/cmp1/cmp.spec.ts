
import { Cmp5101Component } from './cmp';
describe('Cmp5101Component', () => {
  it('should add', () => {
    expect(new Cmp5101Component().add5101(1)).toBe(5102);
  });
});