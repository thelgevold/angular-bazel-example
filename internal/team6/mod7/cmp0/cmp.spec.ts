
import { Cmp8670Component } from './cmp';
describe('Cmp8670Component', () => {
  it('should add', () => {
    expect(new Cmp8670Component().add8670(1)).toBe(8671);
  });
});