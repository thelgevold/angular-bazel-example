
import { Cmp8949Component } from './cmp';
describe('Cmp8949Component', () => {
  it('should add', () => {
    expect(new Cmp8949Component().add8949(1)).toBe(8950);
  });
});