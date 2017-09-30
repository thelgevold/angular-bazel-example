
import { Cmp8365Component } from './cmp';
describe('Cmp8365Component', () => {
  it('should add', () => {
    expect(new Cmp8365Component().add8365(1)).toBe(8366);
  });
});