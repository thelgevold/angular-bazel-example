
import { Cmp3321Component } from './cmp';
describe('Cmp3321Component', () => {
  it('should add', () => {
    expect(new Cmp3321Component().add3321(1)).toBe(3322);
  });
});