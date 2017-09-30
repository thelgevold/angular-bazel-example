
import { Cmp8723Component } from './cmp';
describe('Cmp8723Component', () => {
  it('should add', () => {
    expect(new Cmp8723Component().add8723(1)).toBe(8724);
  });
});