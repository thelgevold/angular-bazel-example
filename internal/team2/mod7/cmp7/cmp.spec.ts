
import { Cmp8277Component } from './cmp';
describe('Cmp8277Component', () => {
  it('should add', () => {
    expect(new Cmp8277Component().add8277(1)).toBe(8278);
  });
});