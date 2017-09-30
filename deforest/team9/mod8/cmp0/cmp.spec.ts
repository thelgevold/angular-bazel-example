
import { Cmp3980Component } from './cmp';
describe('Cmp3980Component', () => {
  it('should add', () => {
    expect(new Cmp3980Component().add3980(1)).toBe(3981);
  });
});