
import { Cmp8983Component } from './cmp';
describe('Cmp8983Component', () => {
  it('should add', () => {
    expect(new Cmp8983Component().add8983(1)).toBe(8984);
  });
});