
import { Cmp6191Component } from './cmp';
describe('Cmp6191Component', () => {
  it('should add', () => {
    expect(new Cmp6191Component().add6191(1)).toBe(6192);
  });
});