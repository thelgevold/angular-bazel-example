
import { Cmp3022Component } from './cmp';
describe('Cmp3022Component', () => {
  it('should add', () => {
    expect(new Cmp3022Component().add3022(1)).toBe(3023);
  });
});