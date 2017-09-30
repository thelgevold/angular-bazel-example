
import { Cmp6144Component } from './cmp';
describe('Cmp6144Component', () => {
  it('should add', () => {
    expect(new Cmp6144Component().add6144(1)).toBe(6145);
  });
});