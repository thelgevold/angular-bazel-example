
import { Cmp8400Component } from './cmp';
describe('Cmp8400Component', () => {
  it('should add', () => {
    expect(new Cmp8400Component().add8400(1)).toBe(8401);
  });
});