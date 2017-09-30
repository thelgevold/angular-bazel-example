
import { Cmp8124Component } from './cmp';
describe('Cmp8124Component', () => {
  it('should add', () => {
    expect(new Cmp8124Component().add8124(1)).toBe(8125);
  });
});