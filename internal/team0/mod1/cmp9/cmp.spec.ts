
import { Cmp8019Component } from './cmp';
describe('Cmp8019Component', () => {
  it('should add', () => {
    expect(new Cmp8019Component().add8019(1)).toBe(8020);
  });
});