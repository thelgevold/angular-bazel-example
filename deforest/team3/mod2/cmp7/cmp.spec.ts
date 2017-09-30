
import { Cmp3327Component } from './cmp';
describe('Cmp3327Component', () => {
  it('should add', () => {
    expect(new Cmp3327Component().add3327(1)).toBe(3328);
  });
});