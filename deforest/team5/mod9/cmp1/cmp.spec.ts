
import { Cmp3591Component } from './cmp';
describe('Cmp3591Component', () => {
  it('should add', () => {
    expect(new Cmp3591Component().add3591(1)).toBe(3592);
  });
});