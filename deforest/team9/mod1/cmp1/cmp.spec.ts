
import { Cmp3911Component } from './cmp';
describe('Cmp3911Component', () => {
  it('should add', () => {
    expect(new Cmp3911Component().add3911(1)).toBe(3912);
  });
});