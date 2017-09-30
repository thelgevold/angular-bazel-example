
import { Cmp6385Component } from './cmp';
describe('Cmp6385Component', () => {
  it('should add', () => {
    expect(new Cmp6385Component().add6385(1)).toBe(6386);
  });
});