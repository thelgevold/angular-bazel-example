
import { Cmp6683Component } from './cmp';
describe('Cmp6683Component', () => {
  it('should add', () => {
    expect(new Cmp6683Component().add6683(1)).toBe(6684);
  });
});