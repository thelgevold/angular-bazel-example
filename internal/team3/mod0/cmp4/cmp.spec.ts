
import { Cmp8304Component } from './cmp';
describe('Cmp8304Component', () => {
  it('should add', () => {
    expect(new Cmp8304Component().add8304(1)).toBe(8305);
  });
});