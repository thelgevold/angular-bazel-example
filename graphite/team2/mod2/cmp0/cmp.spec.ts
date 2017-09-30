
import { Cmp6220Component } from './cmp';
describe('Cmp6220Component', () => {
  it('should add', () => {
    expect(new Cmp6220Component().add6220(1)).toBe(6221);
  });
});