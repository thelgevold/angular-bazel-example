
import { Cmp5825Component } from './cmp';
describe('Cmp5825Component', () => {
  it('should add', () => {
    expect(new Cmp5825Component().add5825(1)).toBe(5826);
  });
});