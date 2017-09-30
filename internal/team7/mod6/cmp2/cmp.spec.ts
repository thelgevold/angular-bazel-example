
import { Cmp8762Component } from './cmp';
describe('Cmp8762Component', () => {
  it('should add', () => {
    expect(new Cmp8762Component().add8762(1)).toBe(8763);
  });
});