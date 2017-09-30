
import { Cmp8659Component } from './cmp';
describe('Cmp8659Component', () => {
  it('should add', () => {
    expect(new Cmp8659Component().add8659(1)).toBe(8660);
  });
});