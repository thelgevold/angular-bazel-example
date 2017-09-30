
import { Cmp5223Component } from './cmp';
describe('Cmp5223Component', () => {
  it('should add', () => {
    expect(new Cmp5223Component().add5223(1)).toBe(5224);
  });
});