
import { Cmp7811Component } from './cmp';
describe('Cmp7811Component', () => {
  it('should add', () => {
    expect(new Cmp7811Component().add7811(1)).toBe(7812);
  });
});