
import { Cmp3550Component } from './cmp';
describe('Cmp3550Component', () => {
  it('should add', () => {
    expect(new Cmp3550Component().add3550(1)).toBe(3551);
  });
});