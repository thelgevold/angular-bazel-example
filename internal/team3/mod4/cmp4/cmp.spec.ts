
import { Cmp8344Component } from './cmp';
describe('Cmp8344Component', () => {
  it('should add', () => {
    expect(new Cmp8344Component().add8344(1)).toBe(8345);
  });
});