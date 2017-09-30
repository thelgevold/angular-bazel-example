
import { Cmp8964Component } from './cmp';
describe('Cmp8964Component', () => {
  it('should add', () => {
    expect(new Cmp8964Component().add8964(1)).toBe(8965);
  });
});