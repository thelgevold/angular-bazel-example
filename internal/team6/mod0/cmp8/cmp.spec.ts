
import { Cmp8608Component } from './cmp';
describe('Cmp8608Component', () => {
  it('should add', () => {
    expect(new Cmp8608Component().add8608(1)).toBe(8609);
  });
});