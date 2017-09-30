
import { Cmp3637Component } from './cmp';
describe('Cmp3637Component', () => {
  it('should add', () => {
    expect(new Cmp3637Component().add3637(1)).toBe(3638);
  });
});