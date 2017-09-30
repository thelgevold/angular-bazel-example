
import { Cmp5902Component } from './cmp';
describe('Cmp5902Component', () => {
  it('should add', () => {
    expect(new Cmp5902Component().add5902(1)).toBe(5903);
  });
});