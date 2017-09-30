
import { Cmp8397Component } from './cmp';
describe('Cmp8397Component', () => {
  it('should add', () => {
    expect(new Cmp8397Component().add8397(1)).toBe(8398);
  });
});