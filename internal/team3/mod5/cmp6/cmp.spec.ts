
import { Cmp8356Component } from './cmp';
describe('Cmp8356Component', () => {
  it('should add', () => {
    expect(new Cmp8356Component().add8356(1)).toBe(8357);
  });
});