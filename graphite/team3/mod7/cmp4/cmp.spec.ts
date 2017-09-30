
import { Cmp6374Component } from './cmp';
describe('Cmp6374Component', () => {
  it('should add', () => {
    expect(new Cmp6374Component().add6374(1)).toBe(6375);
  });
});