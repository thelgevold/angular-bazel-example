
import { Cmp8145Component } from './cmp';
describe('Cmp8145Component', () => {
  it('should add', () => {
    expect(new Cmp8145Component().add8145(1)).toBe(8146);
  });
});