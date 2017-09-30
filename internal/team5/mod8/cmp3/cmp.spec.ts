
import { Cmp8583Component } from './cmp';
describe('Cmp8583Component', () => {
  it('should add', () => {
    expect(new Cmp8583Component().add8583(1)).toBe(8584);
  });
});