
import { Cmp3128Component } from './cmp';
describe('Cmp3128Component', () => {
  it('should add', () => {
    expect(new Cmp3128Component().add3128(1)).toBe(3129);
  });
});