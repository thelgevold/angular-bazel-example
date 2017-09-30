
import { Cmp6260Component } from './cmp';
describe('Cmp6260Component', () => {
  it('should add', () => {
    expect(new Cmp6260Component().add6260(1)).toBe(6261);
  });
});