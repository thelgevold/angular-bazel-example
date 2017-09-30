
import { Cmp8135Component } from './cmp';
describe('Cmp8135Component', () => {
  it('should add', () => {
    expect(new Cmp8135Component().add8135(1)).toBe(8136);
  });
});