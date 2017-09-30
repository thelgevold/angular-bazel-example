
import { Cmp5013Component } from './cmp';
describe('Cmp5013Component', () => {
  it('should add', () => {
    expect(new Cmp5013Component().add5013(1)).toBe(5014);
  });
});