
import { Cmp8317Component } from './cmp';
describe('Cmp8317Component', () => {
  it('should add', () => {
    expect(new Cmp8317Component().add8317(1)).toBe(8318);
  });
});