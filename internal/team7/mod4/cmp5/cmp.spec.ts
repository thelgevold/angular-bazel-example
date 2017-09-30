
import { Cmp8745Component } from './cmp';
describe('Cmp8745Component', () => {
  it('should add', () => {
    expect(new Cmp8745Component().add8745(1)).toBe(8746);
  });
});