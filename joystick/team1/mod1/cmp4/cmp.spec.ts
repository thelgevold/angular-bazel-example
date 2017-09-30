
import { Cmp9114Component } from './cmp';
describe('Cmp9114Component', () => {
  it('should add', () => {
    expect(new Cmp9114Component().add9114(1)).toBe(9115);
  });
});