
import { Cmp1990Component } from './cmp';
describe('Cmp1990Component', () => {
  it('should add', () => {
    expect(new Cmp1990Component().add1990(1)).toBe(1991);
  });
});