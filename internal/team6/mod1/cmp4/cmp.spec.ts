
import { Cmp8614Component } from './cmp';
describe('Cmp8614Component', () => {
  it('should add', () => {
    expect(new Cmp8614Component().add8614(1)).toBe(8615);
  });
});