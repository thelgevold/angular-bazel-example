
import { Cmp8034Component } from './cmp';
describe('Cmp8034Component', () => {
  it('should add', () => {
    expect(new Cmp8034Component().add8034(1)).toBe(8035);
  });
});