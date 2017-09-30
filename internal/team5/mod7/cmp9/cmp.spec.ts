
import { Cmp8579Component } from './cmp';
describe('Cmp8579Component', () => {
  it('should add', () => {
    expect(new Cmp8579Component().add8579(1)).toBe(8580);
  });
});