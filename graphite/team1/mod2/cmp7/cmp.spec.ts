
import { Cmp6127Component } from './cmp';
describe('Cmp6127Component', () => {
  it('should add', () => {
    expect(new Cmp6127Component().add6127(1)).toBe(6128);
  });
});