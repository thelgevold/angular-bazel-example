
import { Cmp8950Component } from './cmp';
describe('Cmp8950Component', () => {
  it('should add', () => {
    expect(new Cmp8950Component().add8950(1)).toBe(8951);
  });
});