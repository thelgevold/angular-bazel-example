
import { Cmp8841Component } from './cmp';
describe('Cmp8841Component', () => {
  it('should add', () => {
    expect(new Cmp8841Component().add8841(1)).toBe(8842);
  });
});