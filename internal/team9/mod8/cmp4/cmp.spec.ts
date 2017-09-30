
import { Cmp8984Component } from './cmp';
describe('Cmp8984Component', () => {
  it('should add', () => {
    expect(new Cmp8984Component().add8984(1)).toBe(8985);
  });
});