
import { Cmp8507Component } from './cmp';
describe('Cmp8507Component', () => {
  it('should add', () => {
    expect(new Cmp8507Component().add8507(1)).toBe(8508);
  });
});