
import { Cmp3683Component } from './cmp';
describe('Cmp3683Component', () => {
  it('should add', () => {
    expect(new Cmp3683Component().add3683(1)).toBe(3684);
  });
});