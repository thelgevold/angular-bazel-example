
import { Cmp8499Component } from './cmp';
describe('Cmp8499Component', () => {
  it('should add', () => {
    expect(new Cmp8499Component().add8499(1)).toBe(8500);
  });
});