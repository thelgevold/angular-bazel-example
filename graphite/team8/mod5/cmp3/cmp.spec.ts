
import { Cmp6853Component } from './cmp';
describe('Cmp6853Component', () => {
  it('should add', () => {
    expect(new Cmp6853Component().add6853(1)).toBe(6854);
  });
});