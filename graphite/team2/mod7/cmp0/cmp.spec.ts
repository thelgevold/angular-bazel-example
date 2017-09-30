
import { Cmp6270Component } from './cmp';
describe('Cmp6270Component', () => {
  it('should add', () => {
    expect(new Cmp6270Component().add6270(1)).toBe(6271);
  });
});