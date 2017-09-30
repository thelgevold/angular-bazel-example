
import { Cmp3725Component } from './cmp';
describe('Cmp3725Component', () => {
  it('should add', () => {
    expect(new Cmp3725Component().add3725(1)).toBe(3726);
  });
});