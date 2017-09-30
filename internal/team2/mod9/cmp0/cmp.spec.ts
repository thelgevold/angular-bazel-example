
import { Cmp8290Component } from './cmp';
describe('Cmp8290Component', () => {
  it('should add', () => {
    expect(new Cmp8290Component().add8290(1)).toBe(8291);
  });
});