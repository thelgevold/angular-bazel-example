
import { Cmp8154Component } from './cmp';
describe('Cmp8154Component', () => {
  it('should add', () => {
    expect(new Cmp8154Component().add8154(1)).toBe(8155);
  });
});