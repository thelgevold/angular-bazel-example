
import { Cmp8140Component } from './cmp';
describe('Cmp8140Component', () => {
  it('should add', () => {
    expect(new Cmp8140Component().add8140(1)).toBe(8141);
  });
});