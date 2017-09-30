
import { Cmp3102Component } from './cmp';
describe('Cmp3102Component', () => {
  it('should add', () => {
    expect(new Cmp3102Component().add3102(1)).toBe(3103);
  });
});