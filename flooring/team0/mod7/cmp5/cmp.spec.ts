
import { Cmp5075Component } from './cmp';
describe('Cmp5075Component', () => {
  it('should add', () => {
    expect(new Cmp5075Component().add5075(1)).toBe(5076);
  });
});