
import { Cmp8621Component } from './cmp';
describe('Cmp8621Component', () => {
  it('should add', () => {
    expect(new Cmp8621Component().add8621(1)).toBe(8622);
  });
});