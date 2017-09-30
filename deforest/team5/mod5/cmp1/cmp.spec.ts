
import { Cmp3551Component } from './cmp';
describe('Cmp3551Component', () => {
  it('should add', () => {
    expect(new Cmp3551Component().add3551(1)).toBe(3552);
  });
});