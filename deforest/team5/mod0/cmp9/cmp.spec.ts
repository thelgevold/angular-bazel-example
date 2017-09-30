
import { Cmp3509Component } from './cmp';
describe('Cmp3509Component', () => {
  it('should add', () => {
    expect(new Cmp3509Component().add3509(1)).toBe(3510);
  });
});