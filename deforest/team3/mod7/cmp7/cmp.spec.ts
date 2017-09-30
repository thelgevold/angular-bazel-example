
import { Cmp3377Component } from './cmp';
describe('Cmp3377Component', () => {
  it('should add', () => {
    expect(new Cmp3377Component().add3377(1)).toBe(3378);
  });
});