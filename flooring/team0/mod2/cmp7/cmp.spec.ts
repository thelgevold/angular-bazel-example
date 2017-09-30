
import { Cmp5027Component } from './cmp';
describe('Cmp5027Component', () => {
  it('should add', () => {
    expect(new Cmp5027Component().add5027(1)).toBe(5028);
  });
});