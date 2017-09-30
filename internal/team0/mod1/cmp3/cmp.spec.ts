
import { Cmp8013Component } from './cmp';
describe('Cmp8013Component', () => {
  it('should add', () => {
    expect(new Cmp8013Component().add8013(1)).toBe(8014);
  });
});