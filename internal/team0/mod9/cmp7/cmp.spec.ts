
import { Cmp8097Component } from './cmp';
describe('Cmp8097Component', () => {
  it('should add', () => {
    expect(new Cmp8097Component().add8097(1)).toBe(8098);
  });
});