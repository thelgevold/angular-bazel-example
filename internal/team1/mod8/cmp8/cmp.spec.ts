
import { Cmp8188Component } from './cmp';
describe('Cmp8188Component', () => {
  it('should add', () => {
    expect(new Cmp8188Component().add8188(1)).toBe(8189);
  });
});