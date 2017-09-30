
import { Cmp8286Component } from './cmp';
describe('Cmp8286Component', () => {
  it('should add', () => {
    expect(new Cmp8286Component().add8286(1)).toBe(8287);
  });
});