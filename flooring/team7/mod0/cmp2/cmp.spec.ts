
import { Cmp5702Component } from './cmp';
describe('Cmp5702Component', () => {
  it('should add', () => {
    expect(new Cmp5702Component().add5702(1)).toBe(5703);
  });
});