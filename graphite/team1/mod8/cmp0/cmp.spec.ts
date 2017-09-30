
import { Cmp6180Component } from './cmp';
describe('Cmp6180Component', () => {
  it('should add', () => {
    expect(new Cmp6180Component().add6180(1)).toBe(6181);
  });
});