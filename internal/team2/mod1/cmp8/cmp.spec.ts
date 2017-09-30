
import { Cmp8218Component } from './cmp';
describe('Cmp8218Component', () => {
  it('should add', () => {
    expect(new Cmp8218Component().add8218(1)).toBe(8219);
  });
});