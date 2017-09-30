
import { Cmp8394Component } from './cmp';
describe('Cmp8394Component', () => {
  it('should add', () => {
    expect(new Cmp8394Component().add8394(1)).toBe(8395);
  });
});