
import { Cmp6181Component } from './cmp';
describe('Cmp6181Component', () => {
  it('should add', () => {
    expect(new Cmp6181Component().add6181(1)).toBe(6182);
  });
});