
import { Cmp3609Component } from './cmp';
describe('Cmp3609Component', () => {
  it('should add', () => {
    expect(new Cmp3609Component().add3609(1)).toBe(3610);
  });
});