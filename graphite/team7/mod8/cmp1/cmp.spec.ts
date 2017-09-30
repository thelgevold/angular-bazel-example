
import { Cmp6781Component } from './cmp';
describe('Cmp6781Component', () => {
  it('should add', () => {
    expect(new Cmp6781Component().add6781(1)).toBe(6782);
  });
});