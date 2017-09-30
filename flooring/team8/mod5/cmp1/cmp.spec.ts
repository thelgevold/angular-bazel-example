
import { Cmp5851Component } from './cmp';
describe('Cmp5851Component', () => {
  it('should add', () => {
    expect(new Cmp5851Component().add5851(1)).toBe(5852);
  });
});