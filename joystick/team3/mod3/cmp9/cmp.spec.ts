
import { Cmp9339Component } from './cmp';
describe('Cmp9339Component', () => {
  it('should add', () => {
    expect(new Cmp9339Component().add9339(1)).toBe(9340);
  });
});