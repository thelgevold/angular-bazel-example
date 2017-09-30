
import { Cmp3623Component } from './cmp';
describe('Cmp3623Component', () => {
  it('should add', () => {
    expect(new Cmp3623Component().add3623(1)).toBe(3624);
  });
});