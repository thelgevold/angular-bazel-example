
import { Cmp6637Component } from './cmp';
describe('Cmp6637Component', () => {
  it('should add', () => {
    expect(new Cmp6637Component().add6637(1)).toBe(6638);
  });
});