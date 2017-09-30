
import { Cmp6923Component } from './cmp';
describe('Cmp6923Component', () => {
  it('should add', () => {
    expect(new Cmp6923Component().add6923(1)).toBe(6924);
  });
});