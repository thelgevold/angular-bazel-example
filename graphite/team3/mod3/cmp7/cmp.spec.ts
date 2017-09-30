
import { Cmp6337Component } from './cmp';
describe('Cmp6337Component', () => {
  it('should add', () => {
    expect(new Cmp6337Component().add6337(1)).toBe(6338);
  });
});