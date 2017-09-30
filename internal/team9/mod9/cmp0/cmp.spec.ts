
import { Cmp8990Component } from './cmp';
describe('Cmp8990Component', () => {
  it('should add', () => {
    expect(new Cmp8990Component().add8990(1)).toBe(8991);
  });
});