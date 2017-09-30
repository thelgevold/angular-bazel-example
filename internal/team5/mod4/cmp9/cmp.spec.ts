
import { Cmp8549Component } from './cmp';
describe('Cmp8549Component', () => {
  it('should add', () => {
    expect(new Cmp8549Component().add8549(1)).toBe(8550);
  });
});