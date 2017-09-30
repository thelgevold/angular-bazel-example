
import { Cmp3055Component } from './cmp';
describe('Cmp3055Component', () => {
  it('should add', () => {
    expect(new Cmp3055Component().add3055(1)).toBe(3056);
  });
});