
import { Cmp8431Component } from './cmp';
describe('Cmp8431Component', () => {
  it('should add', () => {
    expect(new Cmp8431Component().add8431(1)).toBe(8432);
  });
});