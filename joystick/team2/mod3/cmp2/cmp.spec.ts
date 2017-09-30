
import { Cmp9232Component } from './cmp';
describe('Cmp9232Component', () => {
  it('should add', () => {
    expect(new Cmp9232Component().add9232(1)).toBe(9233);
  });
});