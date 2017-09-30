
import { Cmp8297Component } from './cmp';
describe('Cmp8297Component', () => {
  it('should add', () => {
    expect(new Cmp8297Component().add8297(1)).toBe(8298);
  });
});