
import { Cmp3587Component } from './cmp';
describe('Cmp3587Component', () => {
  it('should add', () => {
    expect(new Cmp3587Component().add3587(1)).toBe(3588);
  });
});