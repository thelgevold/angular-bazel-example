
import { Cmp5255Component } from './cmp';
describe('Cmp5255Component', () => {
  it('should add', () => {
    expect(new Cmp5255Component().add5255(1)).toBe(5256);
  });
});