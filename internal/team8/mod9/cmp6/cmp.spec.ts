
import { Cmp8896Component } from './cmp';
describe('Cmp8896Component', () => {
  it('should add', () => {
    expect(new Cmp8896Component().add8896(1)).toBe(8897);
  });
});