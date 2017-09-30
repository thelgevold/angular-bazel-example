
import { Cmp8543Component } from './cmp';
describe('Cmp8543Component', () => {
  it('should add', () => {
    expect(new Cmp8543Component().add8543(1)).toBe(8544);
  });
});