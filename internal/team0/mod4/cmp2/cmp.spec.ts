
import { Cmp8042Component } from './cmp';
describe('Cmp8042Component', () => {
  it('should add', () => {
    expect(new Cmp8042Component().add8042(1)).toBe(8043);
  });
});