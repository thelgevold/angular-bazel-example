
import { Cmp6608Component } from './cmp';
describe('Cmp6608Component', () => {
  it('should add', () => {
    expect(new Cmp6608Component().add6608(1)).toBe(6609);
  });
});