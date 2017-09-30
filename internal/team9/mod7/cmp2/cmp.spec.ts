
import { Cmp8972Component } from './cmp';
describe('Cmp8972Component', () => {
  it('should add', () => {
    expect(new Cmp8972Component().add8972(1)).toBe(8973);
  });
});