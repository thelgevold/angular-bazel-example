
import { Cmp8753Component } from './cmp';
describe('Cmp8753Component', () => {
  it('should add', () => {
    expect(new Cmp8753Component().add8753(1)).toBe(8754);
  });
});