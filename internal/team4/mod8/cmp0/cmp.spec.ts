
import { Cmp8480Component } from './cmp';
describe('Cmp8480Component', () => {
  it('should add', () => {
    expect(new Cmp8480Component().add8480(1)).toBe(8481);
  });
});