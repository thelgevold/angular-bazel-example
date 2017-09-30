
import { Cmp6219Component } from './cmp';
describe('Cmp6219Component', () => {
  it('should add', () => {
    expect(new Cmp6219Component().add6219(1)).toBe(6220);
  });
});