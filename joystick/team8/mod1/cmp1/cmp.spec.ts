
import { Cmp9811Component } from './cmp';
describe('Cmp9811Component', () => {
  it('should add', () => {
    expect(new Cmp9811Component().add9811(1)).toBe(9812);
  });
});