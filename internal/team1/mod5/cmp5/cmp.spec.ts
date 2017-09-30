
import { Cmp8155Component } from './cmp';
describe('Cmp8155Component', () => {
  it('should add', () => {
    expect(new Cmp8155Component().add8155(1)).toBe(8156);
  });
});