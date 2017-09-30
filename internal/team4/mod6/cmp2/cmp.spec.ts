
import { Cmp8462Component } from './cmp';
describe('Cmp8462Component', () => {
  it('should add', () => {
    expect(new Cmp8462Component().add8462(1)).toBe(8463);
  });
});