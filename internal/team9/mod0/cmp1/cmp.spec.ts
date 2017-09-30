
import { Cmp8901Component } from './cmp';
describe('Cmp8901Component', () => {
  it('should add', () => {
    expect(new Cmp8901Component().add8901(1)).toBe(8902);
  });
});