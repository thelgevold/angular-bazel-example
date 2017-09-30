
import { Cmp6377Component } from './cmp';
describe('Cmp6377Component', () => {
  it('should add', () => {
    expect(new Cmp6377Component().add6377(1)).toBe(6378);
  });
});