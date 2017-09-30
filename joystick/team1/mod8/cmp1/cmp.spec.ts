
import { Cmp9181Component } from './cmp';
describe('Cmp9181Component', () => {
  it('should add', () => {
    expect(new Cmp9181Component().add9181(1)).toBe(9182);
  });
});