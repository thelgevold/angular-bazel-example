
import { Cmp3180Component } from './cmp';
describe('Cmp3180Component', () => {
  it('should add', () => {
    expect(new Cmp3180Component().add3180(1)).toBe(3181);
  });
});