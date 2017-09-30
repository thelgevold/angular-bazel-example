
import { Cmp8785Component } from './cmp';
describe('Cmp8785Component', () => {
  it('should add', () => {
    expect(new Cmp8785Component().add8785(1)).toBe(8786);
  });
});