
import { Cmp3811Component } from './cmp';
describe('Cmp3811Component', () => {
  it('should add', () => {
    expect(new Cmp3811Component().add3811(1)).toBe(3812);
  });
});